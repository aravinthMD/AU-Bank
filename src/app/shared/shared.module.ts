import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';

@NgModule({
  declarations: [SidenavComponent, VerticalMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: "toast-top-center",
      preventDuplicates: true,
    }),
  ],
  exports: [
    SidenavComponent,
    VerticalMenuComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
