import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicHomeComponent } from './public-pages/public-home.component';
import { ProtectedHomeComponent } from './protected-pages/protected-home.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { LoginComponent } from './public-pages/login/login.component';
import { ForgotPasswordComponent } from './public-pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './public-pages/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: ProtectedHomeComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'user-creation',
        loadChildren: () =>
          import('./protected-pages/user-creation/user-creation.module').then(
            (m) => m.UserCreationModule
          ),
      },
      {
        path: 'block-whatsapp',
        loadChildren: () =>
          import('./protected-pages/block-whatsapp/block-whatsapp.module').then(
            (m) => m.BlockWhatsappModule
          ),
      },
      {
        path: 'design-template',
        loadChildren: () =>
          import(
            './protected-pages/design-template/design-template.module'
          ).then((m) => m.DesignTemplateModule),
      },
      {
        path: 'change-password',
        loadChildren: () =>
          import(
            './protected-pages/change-password/change-password.module'
          ).then((m) => m.ChangePasswordModule),
      },
    ],
  },
  {
    path: 'public',
    component: PublicHomeComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password/:id' , component: ResetPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
