import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { ManageUsersRoutingModule } from "./manage-users.routing.module";
import { ManageUsersComponent } from "./manage-users.component";
import { UserDialogComponent } from "./user.dialog.component";
import { DisableUserDialogComponent } from "./disable-user-dialog.component";

@NgModule({
  declarations: [
    ManageUsersComponent,
    UserDialogComponent,
    DisableUserDialogComponent,
  ],
  imports: [CommonModule, SharedModule, ManageUsersRoutingModule],
  entryComponents: [UserDialogComponent, DisableUserDialogComponent],
})
export class ManageUsersModule {}
