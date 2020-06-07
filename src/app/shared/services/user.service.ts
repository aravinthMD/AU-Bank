import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Response, ProcessVariables, UserResponse } from '../models/user.model';
import {
  Menu,
  ADMIN_MENU_ITEMS,
  CALL_CENTER_ADMIN_MENU_ITEMS,
  MARKETING_ADMIN_MENU_ITEMS,
} from '../models/menu.model';
import { ROLES, PAGES } from '../utils/constant';
import { RequestEntity } from '../models/entity-request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUser: Observable<ProcessVariables>;
  public currentHome: Observable<string>;
  public currentMenu: Observable<Menu[]>;

  private currentUserSubject: BehaviorSubject<ProcessVariables>;
  private currentHomeSubject: BehaviorSubject<string>;
  private currentMenuSubject: BehaviorSubject<Menu[]>;

  private API_PATH = '/users';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<ProcessVariables>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentHomeSubject = new BehaviorSubject<string>(
      JSON.parse(localStorage.getItem('currentHome'))
    );
    this.currentHome = this.currentHomeSubject.asObservable();
    this.currentMenuSubject = new BehaviorSubject<Menu[]>(
      JSON.parse(localStorage.getItem('currentMenu'))
    );
    this.currentMenu = this.currentMenuSubject.asObservable();
  }

  public get currentUserValue(): ProcessVariables {
    return this.currentUserSubject.value;
  }

  public get currentHomeValue(): string {
    return this.currentHomeSubject.value;
  }

  public get currentMenuValue(): Menu[] {
    return this.currentMenuSubject.value;
  }

  setHomeAndMenu(data: ProcessVariables): void {
    if (data.role === ROLES.ADMIN) {
      this.currentMenuSubject.next(ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.USER_CREATION);
      localStorage.setItem('currentHome', JSON.stringify(PAGES.USER_CREATION));
      localStorage.setItem('currentMenu', JSON.stringify(ADMIN_MENU_ITEMS));
    } else if (data.role === ROLES.CALL_CENTER_ADMIN) {
      this.currentMenuSubject.next(CALL_CENTER_ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.BLOCK_WHATSAPP);
      localStorage.setItem('currentHome', JSON.stringify(PAGES.BLOCK_WHATSAPP));
      localStorage.setItem(
        'currentMenu',
        JSON.stringify(CALL_CENTER_ADMIN_MENU_ITEMS)
      );
    } else {
      this.currentMenuSubject.next(MARKETING_ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.DESIGN_TEMPLATE);
      localStorage.setItem(
        'currentHome',
        JSON.stringify(PAGES.DESIGN_TEMPLATE)
      );
      localStorage.setItem(
        'currentMenu',
        JSON.stringify(MARKETING_ADMIN_MENU_ITEMS)
      );
    }
  }

  generateAuthenticationToken(email: string, password: string) {
    const data = {email, password };

    const body = {
      email : JSON.stringify(email),
      password: JSON.stringify(password),
    };

    const formData = new HttpParams({fromObject : body});

    return this.http
      .post(`http://178.128.125.44/appiyo/account/login`, formData)
      .subscribe((response) => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
    const { processId, workflowId } = environment.api.getUserDetails;
    const { projectId } = environment;
    const data = { userName: email, password };
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
      .post<Response>(
        `${environment.host}ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
        formData
      )
      .pipe(
        map((response) => {
          const userResponse = response.ProcessVariables;
          localStorage.setItem('currentUser', JSON.stringify(userResponse));
          this.currentUserSubject.next(userResponse);
          this.setHomeAndMenu(userResponse);
          return userResponse;
        })
      );
  }

  logout() {
    return this.http.get(`${environment.host}/account/logout`);
  }

  clear() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentHome');
    localStorage.removeItem('currentMenu');
    this.currentUserSubject.next(null);
    this.currentHomeSubject.next(null);
    this.currentMenuSubject.next(null);
  }

  forgotPassword(emailId: string) {
    const { processId, workflowId } = environment.api.getForgetDetails;
    const { projectId } = environment;
    const data = { emailId };
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

    return this.http.post<Response>(
      `${environment.host}ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  resetPassword(password: string, confirmPassword: string, userId: number) {
    const data = {
      password,
      confirmPassword,
      userId,
    };

    const { processId, workflowId } = environment.api.resetUserPassword;
    const { projectId } = environment;
    const resetpasswordEntity: RequestEntity = {
      processId,
      ProcessVariables: data,
      workflowId,
      projectId,
    };

    const body = {
      processVariables: JSON.stringify(resetpasswordEntity),
    };

    const formData = new HttpParams({ fromObject: body });

    return this.http.post<Response>(
      `${environment.host}ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
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

    const { processId, workflowId } = environment.api.changeUserPassword;
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
    const formData = new HttpParams({ fromObject: body });

    return this.http.post<Response>(
      `${environment.host}ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  createUser(emailId: string, role: string, userId: number) {
    const { processId, workflowId } = environment.api.createUser;
    const { projectId } = environment;
    const data = {
      emailId,
      role,
      userId,
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

    return this.http.post<Response>(
      `${environment.host}ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }

  fetchUserByEmailId(emailId: string, userId: number) {
    const data = {
      emailId,
      userId,
    };
    const { processId, workflowId } = environment.api.getdisableUser;
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

    const formData = new HttpParams({ fromObject: body });

    return this.http.post<UserResponse>(
      `${environment.host}ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
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

    const formData = new HttpParams({ fromObject: body });

    return this.http.post(
      `${environment.host}ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }
}
