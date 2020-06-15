import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DesignTemplateComponent } from "./design-template.component";
import { MessageComponent } from "./message/message.component";
import { PromotionalComponent } from "./promotional/promotional.component";
import { LaunchComponent } from "./launch/launch.component";

const routes: Routes = [
  {
    path: "",
    component: DesignTemplateComponent,
    pathMatch: "full",
  },
  {
    path: "message",
    component: MessageComponent,
  },
  {
    path: "promotional",
    component: PromotionalComponent,
  },
  {
    path: "launch",
    component: LaunchComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignTemplateRoutingModule {}
