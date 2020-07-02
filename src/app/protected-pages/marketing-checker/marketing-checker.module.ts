import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarketingCheckerComponent } from "./marketing-checker.component";
import { MarketingCheckerRoutingModule } from "./marketing-checker.routing.module";
import { LaunchComponent } from "./launch/launch.component";
import { LaunchDashboardComponent } from "./launch-dashboard/launch-dashboard.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ViewTemplateHistoryDialogComponent } from "./launch-dashboard/view-template-history-dialog.component";
import { PreviewTemplateDialogComponent } from "./launch/preview-template-dialog.component";

@NgModule({
  declarations: [
    MarketingCheckerComponent,
    LaunchComponent,
    LaunchDashboardComponent,
    ViewTemplateHistoryDialogComponent,
    PreviewTemplateDialogComponent,
  ],
  imports: [CommonModule, SharedModule, MarketingCheckerRoutingModule],
  entryComponents: [
    ViewTemplateHistoryDialogComponent,
    PreviewTemplateDialogComponent,
  ],
})
export class MarketingCheckerModule {}
