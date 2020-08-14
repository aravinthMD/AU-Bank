import { Component, OnInit, TemplateRef } from "@angular/core";
import { Menu } from "../shared/models/menu.model";
import { MenuService } from "../shared/services/menu.service";
import { UserService } from "../shared/services/user.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  TOASTER_MESSAGES,
  PAGES,
  BUTTON_TEXTS,
} from "../shared/utils/constant";
import { ToasterService } from "../shared/services/toaster.service";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-protected-home",
  templateUrl: "./protected-home.component.html",
  styleUrls: ["./protected-home.component.scss"],
})
export class ProtectedHomeComponent implements OnInit {
  confirmButtonText = BUTTON_TEXTS.CONFIRM_BUTTON_TEXT;
  cancelButtonText = BUTTON_TEXTS.CANCEL_BUTTON_TEXT;

  menuItems: Menu[];
  userName: string;
  currentYear = new Date().getFullYear();
  version = environment.version;
  buildDate = environment.buildDate;

  constructor(
    private menuService: MenuService,
    private userService: UserService,
    private ngbModal: NgbModal,
    private toasterService: ToasterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
    this.userName = this.userService.currentUserValue.userName;
  }

  open(content?: TemplateRef<string>): void {
    this.ngbModal.open(content, {
      ariaLabelledBy: "modal-basic-title",
      centered: true,
    });
  }

  logout(): void {
    this.userService.logout();
    this.ngbModal.dismissAll();
    this.userService.clear();
    this.toasterService.showSuccess(TOASTER_MESSAGES.LOGOUT_SUCCESS);
    this.router.navigate([PAGES.PUBLIC]);
  }
}
