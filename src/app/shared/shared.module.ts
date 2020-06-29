import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ngx-toastr";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { RouterModule } from "@angular/router";
import { VerticalMenuComponent } from "./components/vertical-menu/vertical-menu.component";
import { ToastComponent } from "./components/toast/toast.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMyDatePickerModule } from "angular-mydatepicker";

@NgModule({
  declarations: [SidenavComponent, VerticalMenuComponent, ToastComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    NgbModule,
    AngularMyDatePickerModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: "toast-top-center",
      preventDuplicates: true,
    }),
  ],
  exports: [
    SidenavComponent,
    VerticalMenuComponent,
    ToastComponent,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMyDatePickerModule,
  ],
})
export class SharedModule {}
