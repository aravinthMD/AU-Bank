import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserCreationComponent } from "./user-creation.component";
import { UserCreationRoutingModule } from "./user-creation.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BlockExistingUserComponent } from "src/app/protected-pages/user-creation/block-existing-user.component";

@NgModule({
  declarations: [UserCreationComponent, BlockExistingUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserCreationRoutingModule,
  ],
})
export class UserCreationModule {}
