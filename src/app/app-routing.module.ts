import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PublicHomeComponent } from "./public-pages/public-home.component";
import { ProtectedHomeComponent } from "./protected-pages/protected-home.component";
import { AuthenticationGuard } from "./shared/guards/authentication.guard";
import { LoginComponent } from "./public-pages/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: ProtectedHomeComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: "user-creation",
        loadChildren: () =>
          import("./protected-pages/user-creation/user-creation.module").then(
            (m) => m.UserCreationModule
          ),
      },
      {
        path: "view-whatsapp",
        loadChildren: () =>
          import("./protected-pages/whatsapp/whatsapp.module").then(
            (m) => m.WhatsappModule
          ),
      },
      {
        path: "block-whatsapp",
        loadChildren: () =>
          import("./protected-pages/whatsapp/whatsapp.module").then(
            (m) => m.WhatsappModule
          ),
      },
      {
        path: "marketing-maker",
        loadChildren: () =>
          import(
            "./protected-pages/marketing-maker/marketing-maker.module"
          ).then((m) => m.MarketingMakerModule),
      },
      {
        path: "marketing-checker",
        loadChildren: () =>
          import(
            "./protected-pages/marketing-checker/marketing-checker.module"
          ).then((m) => m.MarketingCheckerModule),
      },
    ],
  },
  {
    path: "public",
    component: PublicHomeComponent,
    children: [
      { path: "", component: LoginComponent },
      { path: "login", component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
