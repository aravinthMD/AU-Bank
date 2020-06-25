import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserCreationComponent } from "./user-creation.component";
import { UserCreationRoutingModule } from "./user-creation.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [UserCreationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserCreationRoutingModule,
  ],
})
export class UserCreationModule {}
