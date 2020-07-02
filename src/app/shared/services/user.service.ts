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
import { RequestEntity } from "../models/entity-request";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public currentUser: Observable<LoginProcessVariables>;
  public currentHome: Observable<string>;
  public currentMenu: Observable<Menu[]>;

  private currentUserSubject: BehaviorSubject<LoginProcessVariables>;
  private currentHomeSubject: BehaviorSubject<string>;
  private currentMenuSubject: BehaviorSubject<Menu[]>;

  constructor(private http: HttpClient) {
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

  public setCurrentUserSubject(response: LoginProcessVariables) {
    localStorage.setItem("currentUser", JSON.stringify(response));
    this.currentUserSubject.next(response);
  }

  setHomeAndMenu(data: LoginProcessVariables): void {
    if (data.role === ROLES.SUPER_ADMIN) {
      this.currentMenuSubject.next(SUPER_ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.USER_CREATION);
      localStorage.setItem("currentHome", JSON.stringify(PAGES.USER_CREATION));
      localStorage.setItem(
        "currentMenu",
        JSON.stringify(SUPER_ADMIN_MENU_ITEMS)
      );
    } else if (data.role === ROLES.ADMIN) {
      this.currentMenuSubject.next(ADMIN_MENU_ITEMS);
      this.currentHomeSubject.next(PAGES.USER_CREATION);
      localStorage.setItem("currentHome", JSON.stringify(PAGES.USER_CREATION));
      localStorage.setItem("currentMenu", JSON.stringify(ADMIN_MENU_ITEMS));
    } else {
      const { menus } = data;
      const USER_MENU_ITEMS = menus.map((menu, index) => {
        return new Menu(index, menu.name, menu.path, false, 0);
      });
      this.currentMenuSubject.next(USER_MENU_ITEMS);
      this.currentHomeSubject.next(USER_MENU_ITEMS[0].routerLink);
      localStorage.setItem(
        "currentHome",
        JSON.stringify(USER_MENU_ITEMS[0].routerLink)
      );
      localStorage.setItem("currentMenu", JSON.stringify(USER_MENU_ITEMS));
    }
  }

  generateAuthenticationToken(email: string, password: string) {
    const data = { email, password };

    const body = {
      email: JSON.stringify(email),
      password: JSON.stringify(password),
    };
    const formData = new HttpParams({ fromObject: body });

    return this.http
      .post(`${environment.host}/account/login`, formData)
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
      .post<LoginResponse>(
        `${environment.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
        formData
      )
      .pipe(
        map((response) => {
          const users = [
            {
              ProcessVariables: {
                dbPassword: "password",
                dbUserName: "SuperAdmin",
                password: "password",
                role: "Super Admin",
                userId: "1",
                userName: "super.admin@gmail.com",
                message: {},
              },
            },
            {
              ProcessVariables: {
                dbPassword: "password",
                dbUserName: "Admin",
                password: "password",
                role: "Admin",
                userId: "2",
                userName: "admin@gmail.com",
                message: {},
              },
            },
            {
              ProcessVariables: {
                dbPassword: "password",
                dbUserName: "User1",
                password: "password",
                role: "User",
                userId: "3",
                userName: "user1@gmail.com",
                message: {},
                menus: [{ name: "View Whatsapp", path: "/view-whatsapp" }],
              },
            },
            {
              ProcessVariables: {
                dbPassword: "password",
                dbUserName: "User2",
                password: "password",
                role: "User",
                userId: "4",
                userName: "user2@gmail.com",
                message: {},
                menus: [
                  { name: "View Whatsapp", path: "/view-whatsapp" },
                  { name: "Block Whatsapp", path: "/block-whatsapp" },
                ],
              },
            },

            {
              ProcessVariables: {
                dbPassword: "password",
                dbUserName: "User3",
                password: "password",
                role: "User",
                userId: "5",
                userName: "user3@gmail.com",
                message: {},
                menus: [
                  { name: "View Whatsapp", path: "/view-whatsapp" },
                  { name: "Block Whatsapp", path: "/block-whatsapp" },
                  { name: "Marketing Maker", path: "/marketing-maker" },
                ],
              },
            },

            {
              ProcessVariables: {
                dbPassword: "password",
                dbUserName: "User4",
                password: "password",
                role: "User",
                userId: "6",
                userName: "user4@gmail.com",
                message: {},
                menus: [
                  { name: "View Whatsapp", path: "/view-whatsapp" },
                  { name: "Block Whatsapp", path: "/block-whatsapp" },
                  { name: "Marketing Checker", path: "/marketing-checker" },
                ],
              },
            },
          ];
          const randomUserResponse = users[0].ProcessVariables;
          const userResponse = response.ProcessVariables;
          localStorage.setItem(
            "currentUser",
            JSON.stringify(randomUserResponse)
          );
          this.currentUserSubject.next(randomUserResponse);
          this.setHomeAndMenu(randomUserResponse);
          return randomUserResponse;
        })
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
    this.currentUserSubject.next(null);
    this.currentHomeSubject.next(null);
    this.currentMenuSubject.next(null);
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

    return this.http.post<LoginResponse>(
      `${environment.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
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
      `${environment.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
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
      `${environment.host}/d/workflows/${workflowId}/execute?projectId=${projectId}`,
      formData
    );
  }
}
