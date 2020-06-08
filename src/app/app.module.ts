import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProtectedHomeComponent } from './protected-pages/protected-home.component';
import { PublicHomeComponent } from './public-pages/public-home.component';
import { LoginComponent } from './public-pages/login/login.component';
import { ForgotPasswordComponent } from './public-pages/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { ResetPasswordComponent } from './public-pages/reset-password/reset-password.component';
import { ChangePasswordComponent } from './public-pages/change-password/change-password.component';



@NgModule({
  declarations: [
    AppComponent,
    ProtectedHomeComponent,
    PublicHomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
