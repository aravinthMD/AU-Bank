import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ReportTableComponent } from './report-table/report-table.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [ReportsComponent, ReportTableComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MaterialModule
  ]
})
export class ReportsModule { }
