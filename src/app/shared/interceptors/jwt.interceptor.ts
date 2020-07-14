import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root",
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        "Content-Type": "application/x-www-form-urlencoded",
        "authentication-token": this.userService.tokenResponseValue
          ? this.userService.tokenResponseValue.token
          : "",
      },
    });
    return next.handle(request).pipe(
      map(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            return event;
          }
        },
        (error: any) => {
          console.log("error", error);
        }
      )
    );
  }
}
