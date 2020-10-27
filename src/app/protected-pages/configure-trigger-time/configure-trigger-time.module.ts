import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { ConfigureTriggerTimeRoutingModule } from './configure-trigger-time-routing.module';
import { ConfigureTriggerTimeComponent } from './configure-trigger-time.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import {MaterialModule} from "src/app/material/material.module";
import { WarningAlertDialogBoxComponent } from './warning-alert-dialog-box/warning-alert-dialog-box.component';



@NgModule({
  declarations: [ConfigureTriggerTimeComponent, WarningAlertDialogBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ConfigureTriggerTimeRoutingModule,
    NgbModule,
    SharedModule,
    MaterialModule
  ],
  exports: [ConfigureTriggerTimeComponent],
  entryComponents : [WarningAlertDialogBoxComponent]
})
export class ConfigureTriggerTimeModule { }
