import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { RouterModule } from "@angular/router";
import { VerticalMenuComponent } from "./components/vertical-menu/vertical-menu.component";
import { ToastComponent } from "./components/toast/toast.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {LocalTimeConverterPipe} from './CustomPipes/local-time-converter.pipe';

@NgModule({
  declarations: [SidenavComponent, VerticalMenuComponent, ToastComponent,LocalTimeConverterPipe],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    SidenavComponent,
    VerticalMenuComponent,
    ToastComponent,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
