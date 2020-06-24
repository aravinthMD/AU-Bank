import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WhatsappComponent } from "./whatsapp.component";

const routes: Routes = [
  {
    path: "",
    component: WhatsappComponent,
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatsappRoutingModule {}
