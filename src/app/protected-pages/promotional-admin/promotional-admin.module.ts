import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { PromotionalAdminRoutingModule } from './promotional-admin-routing.module';
import { PromotionalAdminComponent } from './promotional-admin.component';
import {MaterialModule} from "src/app/material/material.module";

@NgModule({
  declarations: [PromotionalAdminComponent],
  imports: [
    CommonModule,
    PromotionalAdminRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class PromotionalAdminModule { }
