import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserCreationComponent } from "./user-creation.component";
import { UserCreationRoutingModule } from "./user-creation.routing.module";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
  declarations: [UserCreationComponent],
  imports: [CommonModule, SharedModule, UserCreationRoutingModule],
})
export class UserCreationModule {}
