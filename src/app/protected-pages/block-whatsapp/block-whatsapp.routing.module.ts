import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockWhatsappComponent } from './block-whatsapp.component';

const routes: Routes = [
  {
    path: '',
    component: BlockWhatsappComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BlockWhatsappRoutingModule { }
