import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingCheckerComponent } from './marketing-checker.component';
import { MarketingCheckerRoutingModule } from './marketing-checker.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { LaunchComponent } from './launch/launch.component';
import { LaunchDashboardComponent } from './launch-dashboard/launch-dashboard.component';



@NgModule({
  declarations: [MarketingCheckerComponent, LaunchComponent, LaunchDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMyDatePickerModule,
    MarketingCheckerRoutingModule
  ]
})
export class MarketingCheckerModule { }
