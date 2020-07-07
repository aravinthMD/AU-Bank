import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserCreationComponent } from "./external-user-creation.component";
import { ExternalUserCreationRoutingModule } from "./external-user-creation.routing.module";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
  declarations: [UserCreationComponent],
  imports: [CommonModule, SharedModule, ExternalUserCreationRoutingModule],
})
export class ExternalUserCreationModule {}
