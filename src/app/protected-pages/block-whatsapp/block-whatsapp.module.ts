import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockWhatsappComponent } from './block-whatsapp.component';
import { BlockWhatsappRoutingModule } from './block-whatsapp.routing.module';



@NgModule({
  declarations: [BlockWhatsappComponent],
  imports: [
    CommonModule,
    BlockWhatsappRoutingModule
  ]
})
export class BlockWhatsappModule { }
