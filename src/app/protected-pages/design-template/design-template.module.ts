import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignTemplateComponent } from './design-template.component';
import { DesignTemplateRoutingModule } from './design-template.routing.module';



@NgModule({
  declarations: [DesignTemplateComponent],
  imports: [
    CommonModule,
    DesignTemplateRoutingModule
  ]
})
export class DesignTemplateModule { }
