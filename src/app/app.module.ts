import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProtectedHomeComponent } from "./protected-pages/protected-home.component";
import { PublicHomeComponent } from "./public-pages/public-home.component";
import { LoginComponent } from "./public-pages/login/login.component";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Interceptor } from "./shared/interceptors/http.interceptor";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChangePasswordComponent } from "./public-pages/change-password/change-password.component";
import { WINDOW_INTERCEPTOR } from "./shared/interceptors/window.interceptor";
import {MaterialModule} from "./material/material.module";


@NgModule({
  declarations: [
    AppComponent,
    ProtectedHomeComponent,
    PublicHomeComponent,
    LoginComponent,
    ChangePasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    WINDOW_INTERCEPTOR,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
