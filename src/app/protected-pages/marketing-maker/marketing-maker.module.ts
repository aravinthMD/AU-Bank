import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageTemplateComponent } from "./message-template/message-template.component";
import { PromotionalTemplateComponent } from "./promotional-template/promotional-template.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MarketingMakerComponent } from "./marketing-maker.component";
import { MarketingMakerRoutingModule } from "./marketing-maker.routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PreApprovedOffersComponent } from "./pre-approved-offers/pre-approved-offers.component";

@NgModule({
  declarations: [
    MarketingMakerComponent,
    MessageTemplateComponent,
    PromotionalTemplateComponent,
    DashboardComponent,
    PreApprovedOffersComponent,
  ],
  imports: [CommonModule, MarketingMakerRoutingModule, SharedModule],
})
export class MarketingMakerModule {}
