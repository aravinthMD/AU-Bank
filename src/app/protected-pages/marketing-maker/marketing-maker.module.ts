import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageTemplateComponent } from "./message-template/message-template.component";
import { PromotionalTemplateComponent } from "./promotional-template/promotional-template.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MarketingMakerComponent } from "./marketing-maker.component";
import { MarketingMakerRoutingModule } from "./marketing-maker.routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PreApprovedOffersComponent } from "./pre-approved-offers/pre-approved-offers.component";
import {MaterialModule} from "src/app/material/material.module";
import { FilePreviewDialogBoxComponent } from './dashboard/file-preview-dialog-box/file-preview-dialog-box/file-preview-dialog-box.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CustomDateFilterPipe } from './shared/CustomPipe/custom-date-filter.pipe';


@NgModule({
  declarations: [
    MarketingMakerComponent,
    MessageTemplateComponent,
    PromotionalTemplateComponent,
    DashboardComponent,
    PreApprovedOffersComponent,
    FilePreviewDialogBoxComponent,
    CustomDateFilterPipe,
  ],
  imports: [CommonModule, MarketingMakerRoutingModule, SharedModule,MaterialModule,NgMultiSelectDropDownModule.forRoot()],
  entryComponents : [FilePreviewDialogBoxComponent],
})
export class MarketingMakerModule {}
