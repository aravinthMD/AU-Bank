import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigureTriggerTimeComponent} from './configure-trigger-time.component'

const routes: Routes = [
  {
    path : "",
    component : ConfigureTriggerTimeComponent,
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigureTriggerTimeRoutingModule { }
