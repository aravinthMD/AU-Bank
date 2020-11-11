import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionalAdminComponent } from './promotional-admin.component';


const routes: Routes = [
  {
    path :"",
    component : PromotionalAdminComponent,
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionalAdminRoutingModule { }
