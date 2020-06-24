import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WhatsappComponent } from "./whatsapp.component";
import { WhatsappRoutingModule } from "./whatsapp.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMyDatePickerModule } from "angular-mydatepicker";

@NgModule({
  declarations: [WhatsappComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMyDatePickerModule,
    WhatsappRoutingModule,
  ],
})
export class WhatsappModule {}
