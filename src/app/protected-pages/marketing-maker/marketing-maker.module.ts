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
import { WarningDialogBoxComponent} from './warning-dialog-box/warning-dialog-box.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';

@NgModule({
  declarations: [
    MarketingMakerComponent,
    MessageTemplateComponent,
    PromotionalTemplateComponent,
    DashboardComponent,
    PreApprovedOffersComponent,
    FilePreviewDialogBoxComponent,
    CustomDateFilterPipe,
    WarningDialogBoxComponent
  ],
  imports: [CommonModule, MarketingMakerRoutingModule, SharedModule,MaterialModule,NgMultiSelectDropDownModule.forRoot(),NgxCsvParserModule],
  entryComponents : [FilePreviewDialogBoxComponent,WarningDialogBoxComponent],
})
export class MarketingMakerModule {}
