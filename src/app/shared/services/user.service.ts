import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import {
  LoginResponse,
  LoginProcessVariables,
  UserResponse,
} from "../models/user.model";
import {
  Menu,
  ADMIN_MENU_ITEMS,
  SUPER_ADMIN_MENU_ITEMS,
} from "../models/menu.model";
import { ROLES, PAGES } from "../utils/constant";
import {
  RequestEntity,
  TokenResponse,
  EntityResponse,
} from "../models/entity-request";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public currentUser: Observable<LoginProcessVariables>;
  public currentHome: Observable<string>;
  public currentMenu: Observable<Menu[]>;
  public tokenResponse: Observable<TokenResponse>;

  private currentUserSubject: BehaviorSubject<LoginProcessVariables>;
  private currentHomeSubject: BehaviorSubject<string>;
  private currentMenuSubject: BehaviorSubject<Menu[]>;
  private tokenResponseSubject: BehaviorSubject<TokenResponse>;

  constructor(private http: HttpClient) {
    this.tokenResponseSubject = new BehaviorSubject<TokenResponse>(
      JSON.parse(localStorage.getItem("tokenResponse"))
    );
    this.tokenResponse = this.tokenResponseSubject.asObservable();

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

  public get tokenResponseValue(): TokenResponse {
    return this.tokenResponseSubject.value;
  }

  public setCurrentUserSubject(response: LoginProcessVariables) {
    localStorage.setItem("currentUser", JSON.stringify(response));
    this.currentUserSubject.next(response);
  }

  setHomeAndMenu(data: LoginProcessVariables): void {
    if (data.roleName === ROLES.SUPER_ADMIN) {
      this.currentMenuSubject.next(SUPER_ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.USER_CREATION);
      localStorage.setItem("currentHome", JSON.stringify(PAGES.USER_CREATION));
      localStorage.setItem(
        "currentMenu",
        JSON.stringify(SUPER_ADMIN_MENU_ITEMS)
      );
    } else if (data.roleName === ROLES.ADMIN) {
      this.currentMenuSubject.next(ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.USER_CREATION);
      localStorage.setItem("currentHome", JSON.stringify(PAGES.USER_CREATION));
      localStorage.setItem("currentMenu", JSON.stringify(ADMIN_MENU_ITEMS));
    } else {
      const { activityList } = data;
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

  login(email: string, password: string) {
    const body = `email=${email}&password=${password}`;
    return this.http
      .post<TokenResponse>(`${environment.host}/account/login`, body)
      .pipe(
        map((response) => {
          localStorage.setItem("tokenResponse", JSON.stringify(response));
          this.tokenResponseSubject.next(response);
          return response;
        })
      );
  }

  getUserDetail(userName: string) {
    const {
      api: {
        getUserDetails: { processId, workflowId },
      },
      projectId,
    } = environment;
    const data = { userName };
    const requestEntity: RequestEntity = {
      processId,
      workflowId,
      ProcessVariables: data,
      projectId,
    };
    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = new HttpParams({ fromObject: body });

    return this.http
      .post<LoginResponse>(
        `${environment.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
        formData
      )
      .pipe(
        map((response) => {
          const userResponse = response.ProcessVariables;
          localStorage.setItem("currentUser", JSON.stringify(userResponse));
          this.currentUserSubject.next(userResponse);
          this.setHomeAndMenu(userResponse);
          return userResponse;
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
    const data = {
      emailId,
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

    const formData = new HttpParams({ fromObject: body });

    return this.http.post<EntityResponse>(
      `${environment.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
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

    const formData = new HttpParams({ fromObject: body });

    return this.http.post<EntityResponse>(
      `${environment.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  blockUserWhatsappAccesss(
    srNo: string,
    reason: string,
    userId: string,
    optId: string
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
      optId,
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

    const formData = new HttpParams({ fromObject: body });

    return this.http.post<EntityResponse>(
      `${environment.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  logout() {
    return this.http.get(`${environment.host}/account/logout`);
  }

  clear() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentHome");
    localStorage.removeItem("currentMenu");
    localStorage.removeItem("tokenResponse");
    this.currentUserSubject.next(null);
    this.currentHomeSubject.next(null);
    this.currentMenuSubject.next(null);
    this.tokenResponseSubject.next(null);
  }
}
