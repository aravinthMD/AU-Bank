import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicHomeComponent } from './public-pages/public-home.component';
import { ProtectedHomeComponent } from './protected-pages/protected-home.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { LoginComponent } from './public-pages/login/login.component';
import { ForgotPasswordComponent } from './public-pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'private',
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
    ],
  },
  {
    path: 'public',
    component: PublicHomeComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ],
  },
  { path: '', redirectTo: 'public', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
