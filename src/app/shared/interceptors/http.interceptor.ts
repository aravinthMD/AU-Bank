import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { UserService } from "../services/user.service";
import { map, catchError } from "rxjs/operators";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MESSAGES } from "../utils/constant";

@Injectable({
  providedIn: "root",
})
export class Interceptor implements HttpInterceptor {
  constructor(private userService: UserService, private ngbModal: NgbModal) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        "Content-Type": "application/x-www-form-urlencoded",
        "authentication-token": this.userService.tokenValue
          ? this.userService.tokenValue
          : "",
      },
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const response = event.body;
          if (response && response.login_required) {
            this.ngbModal.dismissAll();
            this.userService.closeAndLogout();
          } else {
            return event;
          }
        }
      }),
      catchError((err) => {
        const isNetworkAvailable = window.navigator.onLine;
        const error = !isNetworkAvailable
          ? MESSAGES.NETWORK_NOT_AVAILABLE
          : err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
