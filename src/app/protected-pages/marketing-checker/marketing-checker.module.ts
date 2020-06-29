import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarketingCheckerComponent } from "./marketing-checker.component";
import { MarketingCheckerRoutingModule } from "./marketing-checker.routing.module";
import { LaunchComponent } from "./launch/launch.component";
import { LaunchDashboardComponent } from "./launch-dashboard/launch-dashboard.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    MarketingCheckerComponent,
    LaunchComponent,
    LaunchDashboardComponent,
  ],
  imports: [CommonModule, SharedModule, MarketingCheckerRoutingModule],
})
export class MarketingCheckerModule {}
