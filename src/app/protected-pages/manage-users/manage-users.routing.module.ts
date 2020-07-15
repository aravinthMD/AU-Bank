import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManageUsersComponent } from './manage-users.component';

const routes: Routes = [
  {
    path: "",
    component: ManageUsersComponent,
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageUsersRoutingModule {}
