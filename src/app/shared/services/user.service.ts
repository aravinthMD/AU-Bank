import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams,HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

import { LoginResponse, LoginProcessVariables } from "../models/entity-model";
import {
  Menu,
  ADMIN_MENU_ITEMS,
  SUPER_ADMIN_MENU_ITEMS,
} from "../models/menu.model";
import {
  ROLES,
  PAGES,
  TOASTER_MESSAGES,
  CONCAT_HELPERS,
} from "../utils/constant";
import {
  RequestEntity,
  TokenResponse,
  EntityResponse,
} from "../models/entity-model";
import { Router } from "@angular/router";
import { ToasterService } from "./toaster.service";
import { WINDOW } from "../interceptors/window.interceptor";
import { UserResponse } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public currentUser: Observable<LoginProcessVariables>;
  public currentHome: Observable<string>;
  public currentMenu: Observable<Menu[]>;
  public token: Observable<string>;

  private currentUserSubject: BehaviorSubject<LoginProcessVariables>;
  private currentHomeSubject: BehaviorSubject<string>;
  private currentMenuSubject: BehaviorSubject<Menu[]>;
  private tokenSubject: BehaviorSubject<string>;

  host: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toasterService: ToasterService,
    @Inject(WINDOW) private window: Window
  ) {
    this.tokenSubject = new BehaviorSubject<string>(
      JSON.parse(localStorage.getItem("token"))
    );
    this.token = this.tokenSubject.asObservable();

    this.currentUserSubject = new BehaviorSubject<LoginProcessVariables>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentHomeSubject = new BehaviorSubject<string>(
      JSON.parse(localStorage.getItem("currentHome"))
    );
    this.currentHome = this.currentHomeSubject.asObservable();
    this.currentMenuSubject = new BehaviorSubject<Menu[]>(
      JSON.parse(localStorage.getItem("currentMenu"))
    );
    this.currentMenu = this.currentMenuSubject.asObservable();

    const {
      location: { origin },
    } = this.window;
    this.host = environment.production
      ? `${origin}${environment.host}`
      : environment.host;
  }


  public get currentUserValue(): LoginProcessVariables {
    return this.currentUserSubject.value;
  }

  public get currentHomeValue(): string {
    return this.currentHomeSubject.value;
  }

  public get currentMenuValue(): Menu[] {
    return this.currentMenuSubject.value;
  }

  public get tokenValue(): string {
    return this.tokenSubject.value;
  }

  public setCurrentUserSubject(response: LoginProcessVariables) {
    localStorage.setItem("currentUser", JSON.stringify(response));
    this.currentUserSubject.next(response);
  }

  setHomeAndMenu(roleName: string, activityList: number[]): void {
    if (roleName === ROLES.SUPER_ADMIN) {
      this.currentMenuSubject.next(SUPER_ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.USER_CREATION);
      localStorage.setItem("currentHome", JSON.stringify(PAGES.USER_CREATION));
      localStorage.setItem(
        "currentMenu",
        JSON.stringify(SUPER_ADMIN_MENU_ITEMS)
      );
    } else if (roleName === ROLES.ADMIN) {
      this.currentMenuSubject.next(ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.USER_CREATION);
      localStorage.setItem("currentHome", JSON.stringify(PAGES.USER_CREATION));
      localStorage.setItem("currentMenu", JSON.stringify(ADMIN_MENU_ITEMS));
    } else {
      const USER_MENU_ITEMS = [];
      const isViewWhatsappControlAvailable = activityList.find(
        (value) => value === 1
      );
      const isBlockWhatsappControlAvailable = activityList.find(
        (value) => value === 2
      );
      const isMarketingMakerControlAvailable = activityList.find(
        (value) => value === 3
      );
      const isMarketingCheckerControlAvailable = activityList.find(
        (value) => value === 4
      );
      if (isViewWhatsappControlAvailable) {
        USER_MENU_ITEMS.push(
          new Menu(10, "View Whatsapp", "/view-whatsapp", false, 0)
        );
      }
      if (isBlockWhatsappControlAvailable) {
        USER_MENU_ITEMS.push(
          new Menu(20, "Block Whatsapp", "/block-whatsapp", false, 0)
        );
      }
      if (isMarketingMakerControlAvailable) {
        USER_MENU_ITEMS.push(
          new Menu(30, "Marketing Maker", "/marketing-maker", false, 0)
        );
      }
      if (isMarketingCheckerControlAvailable) {
        USER_MENU_ITEMS.push(
          new Menu(40, "Marketing Checker", "/marketing-checker", false, 0)
        );
      }

      this.currentMenuSubject.next(USER_MENU_ITEMS);
      this.currentHomeSubject.next(USER_MENU_ITEMS[0].routerLink);
      localStorage.setItem(
        "currentHome",
        JSON.stringify(USER_MENU_ITEMS[0].routerLink)
      );
      localStorage.setItem("currentMenu", JSON.stringify(USER_MENU_ITEMS));
    }
  }

  login(email: string, password: string, useADAuth: boolean) {
    const index = email.indexOf("@");
    const formattedUserEmail =
      index === -1 ? `${email}${CONCAT_HELPERS.USER_ID_CONCAT_HELPER}` : email;
    const body = `email=${formattedUserEmail}&password=${password}&useADAuth=${useADAuth}`;

    return this.http
      .post<TokenResponse>(`${this.host}/account/login`, body)
      .pipe(
        map((response) => {
          const { token } = response;
          localStorage.setItem("token", JSON.stringify(token));
          this.tokenSubject.next(token);
          return response;
        })
      );
  }

  getUserDetail(userEmail: string) {
    const index = userEmail.indexOf("@");
    const formattedUserEmail =
      index === -1
        ? `${userEmail}${CONCAT_HELPERS.USER_ID_CONCAT_HELPER}`
        : userEmail;
    const {
      api: {
        getUserDetails: { processId, workflowId },
      },
      projectId,
    } = environment;
    const data = { userName: formattedUserEmail };
    const requestEntity: RequestEntity = {
      processId,
      workflowId,
      ProcessVariables: data,
      projectId,
    };
    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http
      .post<LoginResponse>(
        `${this.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
        formData
      )
      .pipe(
        map((response) => {
          if (response && response.ProcessVariables) {
            const userResponse = response.ProcessVariables;
            localStorage.setItem("currentUser", JSON.stringify(userResponse));
            this.currentUserSubject.next(userResponse);
            const { roleName, activityList } = userResponse;
            this.setHomeAndMenu(roleName, activityList);
            return userResponse;
          }
        })
      );
  }

  createUser(
    emailId: string,
    roleName: string,
    userId: number,
    activityList: number[]
  ) {
    const {
      api: {
        createUser: { processId, workflowId },
      },
      projectId,
    } = environment;
    const userEmail = emailId;
    const index = userEmail.indexOf("@");
    const formattedUserEmail =
      index === -1 ? `${userEmail}@uataxisb.com` : userEmail;
    const data = {
      emailId: formattedUserEmail,
      roleName,
      userId,
      activityList,
    };

    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  fetchUserByMobileNumber(mobileNumber: string) {
    const {
      api: {
        fetchUserByMobileNumber: { processId, workflowId },
      },
      projectId,
    } = environment;
    const data = {
      mobileNumber,
    };

    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  blockUserWhatsappAccesss(
    srNo: string,
    reason: string,
    userId: string,
    action: string,
    cTime: string,
    channel: string,
    mobile: string
  ) {
    const {
      api: {
        blockUserWhatsappAccess: { processId, workflowId },
      },
      projectId,
    } = environment;
    const data = {
      srNo,
      reason,
      userId,
      action,
      cTime,
      channel,
      mobile,
    };

    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  changePassword(
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string,
    userId: number
  ) {
    const data = {
      currentPassword,
      newPassword,
      confirmNewPassword,
      userId,
    };

    const {
      api: {
        changeUserPassword: { processId, workflowId },
      },
      projectId,
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };
    const formData = new HttpParams({ fromObject: body });

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  disableUserById(newUserId: number, userId: number) {
    const data = {
      newUserId,
      userId,
    };

    const { processId, workflowId } = environment.api.disableUser;
    const { projectId } = environment;

    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<UserResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  fetchUsers(perPage: number, currentPage: number) {
    const data = {
      perPage,
      currentPage,
    };
    const {
      api: {
        fetchUsers: { processId, workflowId },
      },
      projectId,
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  fetchUserActivityByUserId(userId: number) {
    const data = {
      userId,
    };
    const {
      api: {
        fetchUserActivityList: { processId, workflowId },
      },
      projectId,
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  updateUser(userId: number, activityList: number[], modifiedBy: number) {
    const data = {
      userId,
      activityList,
      modifiedBy,
    };
    const {
      api: {
        updateUser: { processId, workflowId },
      },
      projectId,
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  downloadReport(
    mobileNo: string,
    fromDate: string,
    toDate: string,
    downloadType: any,
    isDownload: boolean,
    from: number
  ) {
    const data = {
      mobileNo,
      fromDate,
      toDate,
      downloadType,
      isDownload,
      from
    };
    const {
      api: {
        whatsappReport: { processId, workflowId },
      },
      projectId,
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  createMessageTemplate(
    template: string,
    startDate: string,
    endDate: string,
    triggerTime: string,
    userId: string,
    uploadFlag: boolean,
    documentId: any,
    csvDocId :  any,
    timeZone : any,
    countryCode: any
  ) {
    const data = {
      template,
      startDate,
      endDate,
      triggerTime,
      userId,
      uploadFlag,
      documentId,
      csvDocId,
      timeZone,
      countryCode
    };
    const {
      api: {
        createMessageTemplate: { processId, workflowId, projectId },
      },
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  createPromotionalTemplate(
    templateId: string,
    template: string,
    startDate: string,
    triggerTime: string,
    userId: string,
    uploadFlag: boolean,
    documentId: any,
    csvDocId : any,
    timeZone : any,
    countryCode : any
  ) {
    const data = {
      templateId,
      template,
      startDate,
      triggerTime,
      userId,
      isPromotion: "true",
      uploadFlag,
      documentId,
      csvDocId,
      timeZone,
      countryCode
    };
    const {
      api: {
        createPromotionalTemplate: { processId, workflowId, projectId },
      },
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  createPreapprovedOffer(
    templateId : any,
    template : string,
    startDate: string,
    endDate: string,
    triggerTime: string,
    userId: string,
    uploadFlag : boolean,
    documentId : any,
    csvDocId : any,
    timeZone: any,
    countryCode : any
  ) {
    const data = {
      templateId,
      template,
      startDate,
      triggerTime,
      endDate,
      userId,
      timeZone,
      countryCode,
      documentId,
      csvDocId,
      uploadFlag
    };
    const {
      api: {
        createPreappovedOffer: { processId, workflowId, projectId },
      },
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  fetchTemplates(
    currentPage: number,
    fromDate: string,
    toDate: string,
    templateStatus: string,
    templateType : string
  ) {
    const data = {
      fromDate,
      toDate,
      templateStatus,
      currentPage,
      templateType
    };
    const {
      api: {
        fetchTemplates: { processId, workflowId, projectId },
      },
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  updateTemplate(
    userId: string,
    templateStatus: string,
    id: string,
    previewUrl:string,
    reason?: string,
  ) {
    const data = {
      userId,
      templateStatus,
      id,
      reason,
      previewUrl
    };
    const {
      api: {
        updateTemplate: { processId, workflowId, projectId },
      },
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  deactivateTemplate(
    id: string,
  ) {
    const data = {
      id
    };
    const {
      api: {
        deactivateTemplate: { processId, workflowId, projectId },
      },
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  activateTemplate(id : string)
  {
    const data = {
      id
    };

    const {
      api: {
        activateTemplate: { processId, workflowId, projectId },
      },
    } = environment;
    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );

  }

  

  logout() {
    this.http.get(`${this.host}/account/logout`);
  }

  clear() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentHome");
    localStorage.removeItem("currentMenu");
    localStorage.removeItem("token");
    this.currentUserSubject.next(null);
    this.currentHomeSubject.next(null);
    this.currentMenuSubject.next(null);
    this.tokenSubject.next(null);
  }

  transform(data: any) {
    return new HttpParams({ fromObject: data });
  }

  closeAndLogout() {
    this.logout();
    this.clear();
    this.toasterService.showError(TOASTER_MESSAGES.TOKEN_EXPIRED_MESSAGE);
    this.router.navigate([
      PAGES.PUBLIC,
      {
        queryParams: { returnUrl: this.router.url },
      },
    ]);
  }

  fetchCheckerScreenTemplates(
    currentPage: number,
    fromDate : string,
    toDate : string,
    templateStatus : string,
    checkerLogin : string,
    isActiveInput :string,
    templateType : string
  )
  {

    const data = {
      fromDate,
      toDate,
      templateStatus,
      currentPage,
      checkerLogin,
      isActiveInput,
      templateType
    }

    const {
      api : {
        fetchcheckerScreenTemplates :{ processId ,workflowId, projectId},
      } ,
    } = environment;

    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity)
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );

  }

  fetchViewTemplate(id : string)
  {
    const data = {
      id
    };

    const {
      api: {
        fetchViewTemplate: { processId, workflowId, projectId },
      },
    } = environment;

    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };
      
    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );

  }

  uploadToAppiyoDrive(file : File)
  {
    let uri = environment.host + environment.appiyoDrive;
    let headers = {
      headers: new HttpHeaders({
       // 'Content-Type': 'application/json'
      })
      
    };
  //  const headers = {
  //     'Content-Type': 'application/json'
  //   }
    const formData = new FormData();
    formData.append('file[]',file,file.name); 
    return this.http.post(uri,formData,headers);
  }


  getPromotionalDropDown()
  {
    const data = {};
    const {
      api : {
        fetchPromotionalDropDownData : {processId ,workflowId , projectId}
      },
    } = environment;

    const requestEntity : RequestEntity = {
      processId,
      ProcessVariables : data,
      workflowId,
      projectId
    }

    // const body = {"processId":"dd2d9a6aec6211ea9c031a78550cd107",
    //               "ProcessVariables":{},
    //               "workflowId":"2356727ad5a511eab60b727d5ac274b2",
    //               "projectId":"e45e9cf0d5a411eab60b727d5ac274b2"};
    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    // var myJson = JSON.stringify(requestEntity);
    // const body = {
    //        requestEntity,
    //     };

    // var Obj = JSON.stringify(body);

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,formData
    );
  }
  

  getPreApprovedOffersDropDownData(){
    const data = {};
    const {
      api : {
        fetchPreApprovedDropDownData : {processId ,workflowId , projectId}
      },
    } = environment;

    const requestEntity : RequestEntity = {
      processId,
      ProcessVariables : data,
      workflowId,
      projectId
    }

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,formData
    );
  }

  getTriggerTimeBlock(id:any){
    const data = {id};
    const {
      api : {
        getTriggerTimeBlocked : {processId ,workflowId , projectId}
      },
    } = environment;

    const requestEntity : RequestEntity = {
      processId,
      ProcessVariables : data,
      workflowId,
      projectId
    }

    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,formData
      );

  }

  updateBlockTriggerTime(blockedFrom,blockedTo,userId,id){
    const data = {
      blockedFrom,
      blockedTo,
      id,
      userId
    };
    const {
      api : {
        updateBlockTriggerTimeApi : {processId ,workflowId , projectId}
      },
    } = environment
    const requestEntity : RequestEntity = {
      processId,
      ProcessVariables : data,
      workflowId,
      projectId
    }
    const body = {
      processVariables: JSON.stringify(requestEntity),
    };
    const formData = this.transform(body);
    return this.http.post<EntityResponse>(
      `${this.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,formData
    );
  }


  fetchTimeZonesBasedBlockedTimes()
  {
    const data = {}

    const {
      api : {
        fetchTimeZonesBasedBlockedTimeApi : {processId,workflowId,projectId}
      },
    } = environment;

    const requestEntity : RequestEntity = {
      processId,
      ProcessVariables : data,
      workflowId,
      projectId
    };

    const body = {
      processVariables : JSON.stringify(requestEntity)
    }

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );

  }

  updateTimeZonesBasedBlockedTime(id ? :any,userId ? : any,blockedFrom ? : any,blockedTo ?: any){
    const data = {
      id,
      userId ,
      blockedFrom,
      blockedTo
    }

    const {
      api : {
        timeZonesBasedBlockedTimeUpdateApi :{ processId ,workflowId, projectId},
      } ,
    } = environment;

    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(requestEntity)
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }


  //Admin - Creating PreApproved and Promotional Tempaltes 

  createAdminTemplates(
    templateId :  string,
    templateName :  string,
    templateMessage : string,
    templateType : string
  ){

    const data = {
      templateId,
      templateMessage,
      templateName,
      templateType
    }

    const { 
      api : {
        createAdminPromotionalAndPreApprovedTemplate : { processId,workflowId,projectId },
      },
    } = environment;


    const requestEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };


    const body = {
      processVariables: JSON.stringify(requestEntity)
    };

    const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );


    }


    fetchAdminTemplates(){
      const data = {};

      const {
        api : {
          fetchAdminTemplateApi :{ processId ,workflowId, projectId},
        } ,
      } = environment;

      const requestEntity: RequestEntity = {
        processId,
        ProcessVariables: data,
        workflowId,
        projectId,
      };

      const body = {
        processVariables: JSON.stringify(requestEntity)
      };

      const formData = this.transform(body);

    return this.http.post<EntityResponse>(
      `${this.host}/ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );

    }
  

}
