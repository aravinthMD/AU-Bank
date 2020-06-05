import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginResponse, LoginProcessVariables } from '../models/user.model';
import {
  Menu, ADMIN_MENU_ITEMS, CALL_CENTER_ADMIN_MENU_ITEMS, MARKETING_ADMIN_MENU_ITEMS,
} from '../models/menu.model';
import { ROLES, PAGES } from '../utils/constant';
import { RequestEntity } from '../models/entity-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser: Observable<LoginProcessVariables>;
  public currentHome: Observable<string>;
  public currentMenu: Observable<Menu[]>;

  private currentUserSubject: BehaviorSubject<LoginProcessVariables>;
  private currentHomeSubject: BehaviorSubject<string>;
  private currentMenuSubject: BehaviorSubject<Menu[]>;

  private API_PATH = '/users';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LoginProcessVariables>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentHomeSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentHome')));
    this.currentHome = this.currentHomeSubject.asObservable();
    this.currentMenuSubject = new BehaviorSubject<Menu[]>(JSON.parse(localStorage.getItem('currentMenu')));
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

  setHomeAndMenu(data: LoginProcessVariables): void {
    if (data.role === ROLES.ADMIN) {
      this.currentMenuSubject.next(ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.USER_CREATION);
      localStorage.setItem('currentHome', JSON.stringify(PAGES.USER_CREATION));
      localStorage.setItem('currentMenu', JSON.stringify(ADMIN_MENU_ITEMS));
    } else if (data.role === ROLES.CALL_CENTER_ADMIN) {
      this.currentMenuSubject.next(CALL_CENTER_ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.BLOCK_WHATSAPP);
      localStorage.setItem('currentHome', JSON.stringify(PAGES.BLOCK_WHATSAPP));
      localStorage.setItem('currentMenu', JSON.stringify(CALL_CENTER_ADMIN_MENU_ITEMS));
    }  else {
      this.currentMenuSubject.next(MARKETING_ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.DESIGN_TEMPLATE);
      localStorage.setItem('currentHome', JSON.stringify(PAGES.DESIGN_TEMPLATE));
      localStorage.setItem('currentMenu', JSON.stringify(MARKETING_ADMIN_MENU_ITEMS));
    }
  }

  login(email: string, password: string) {
    const processId = environment.api.getUserDetails.processId;
    const workflowId = environment.api.getUserDetails.workflowId;
    const projectId = environment.projectId;
    const ProcessVariables = {userName: email, password};
    const requestEntity: RequestEntity = {
      processId,
      workflowId,
      ProcessVariables,
      projectId,
    };
    const body = {
      processVariables: JSON.stringify(requestEntity),
    };

    const formData = new HttpParams({ fromObject: body });

    // tslint:disable-next-line: max-line-length
    return this.http.post<LoginResponse>(`${environment.host}ProcessStore/d/workflows/${workflowId}/execute?projectId=${projectId}`, formData)
    .pipe(map(response => {
      if (response.Status === 'Execution Completed') {
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUserSubject.next(response.ProcessVariables);
        this.setHomeAndMenu(response.ProcessVariables);
      }
      return response.ProcessVariables;
    }));
  }

  logout() {
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


}
