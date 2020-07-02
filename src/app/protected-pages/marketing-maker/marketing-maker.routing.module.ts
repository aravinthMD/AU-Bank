import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MarketingMakerComponent } from "./marketing-maker.component";

const routes: Routes = [
  {
    path: "",
    component: MarketingMakerComponent,
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingMakerRoutingModule {}
