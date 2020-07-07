import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserCreationComponent } from "./external-user-creation.component";

const routes: Routes = [
  {
    path: "",
    component: UserCreationComponent,
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalUserCreationRoutingModule {}
