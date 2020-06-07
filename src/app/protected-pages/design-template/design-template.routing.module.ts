import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignTemplateComponent } from './design-template.component';

const routes: Routes = [
  {
    path: '',
    component: DesignTemplateComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignTemplateRoutingModule { }
