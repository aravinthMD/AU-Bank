import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MarketingCheckerComponent } from "./marketing-checker.component";

const routes: Routes = [
  {
    path: "",
    component: MarketingCheckerComponent,
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingCheckerRoutingModule {}
