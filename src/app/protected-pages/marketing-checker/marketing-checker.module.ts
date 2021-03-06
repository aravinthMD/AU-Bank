import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarketingCheckerComponent } from "./marketing-checker.component";
import { MarketingCheckerRoutingModule } from "./marketing-checker.routing.module";
import { LaunchComponent } from "./launch/launch.component";
import { LaunchDashboardComponent } from "./launch-dashboard/launch-dashboard.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ViewTemplateHistoryDialogComponent } from "./launch-dashboard/view-template-history-dialog.component";
import { ApproveTemplateDialogComponent } from "./launch/approve-template-dialog.component";
import { RejectTemplateDialogComponent } from "./launch/reject-template-dialog.component";
import {MaterialModule} from "src/app/material/material.module";
import { FilePreviewDialogComponent } from './launch-dashboard/file-preview-dialog/file-preview-dialog.component';
import { FilePreviewDialogBoxComponent } from './launch/file-preview-dialog-box/file-preview-dialog-box.component';
import { CustomDateFilterPipe } from './shared/customPipe/custom-date-filter.pipe'


@NgModule({
  declarations: [
    MarketingCheckerComponent,
    LaunchComponent,
    LaunchDashboardComponent,
    ViewTemplateHistoryDialogComponent,
    ApproveTemplateDialogComponent,
    RejectTemplateDialogComponent,
    FilePreviewDialogComponent,
    FilePreviewDialogBoxComponent,
    CustomDateFilterPipe,
  ],
  imports: [CommonModule, SharedModule, MarketingCheckerRoutingModule,MaterialModule],
  entryComponents: [
    ViewTemplateHistoryDialogComponent,
    ApproveTemplateDialogComponent,
    RejectTemplateDialogComponent,
    FilePreviewDialogComponent,
    FilePreviewDialogBoxComponent
  ],
})
export class MarketingCheckerModule {}
