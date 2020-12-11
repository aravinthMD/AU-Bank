import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WhatsappComponent } from "./whatsapp.component";
import { WhatsappRoutingModule } from "./whatsapp.routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { BlockWhatsappDialogComponent } from "./block-whatsapp-dialog.component";
import {MaterialModule } from 'src/app/material/material.module'

@NgModule({
  declarations: [WhatsappComponent, BlockWhatsappDialogComponent],
  imports: [CommonModule, SharedModule, WhatsappRoutingModule,MaterialModule],
  entryComponents: [BlockWhatsappDialogComponent],
})
export class WhatsappModule {}
