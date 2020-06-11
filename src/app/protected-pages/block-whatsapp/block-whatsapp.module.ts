import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlockWhatsappComponent } from "./block-whatsapp.component";
import { BlockWhatsappRoutingModule } from "./block-whatsapp.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMyDatePickerModule } from 'angular-mydatepicker';

@NgModule({
  declarations: [BlockWhatsappComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMyDatePickerModule,
    BlockWhatsappRoutingModule,
  ],
})
export class BlockWhatsappModule {}
