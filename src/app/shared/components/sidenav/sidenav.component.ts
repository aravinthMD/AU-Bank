import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UserService } from "../../services/user.service";
import { MenuService } from "../../services/menu.service";
import { Menu } from "../../models/menu.model";
import { Router } from "@angular/router";
import { PAGES, TOASTER_MESSAGES, BUTTON_TEXTS } from "../../utils/constant";
import { ToasterService } from "../../services/toastr.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit {
  menuItems: Menu[];
  userName: string;

  confirmButtonText = BUTTON_TEXTS.CONFIRM_BUTTON_TEXT;
  cancelButtonText = BUTTON_TEXTS.CANCEL_BUTTON_TEXT;

  constructor(
    private menuService: MenuService,
    private userService: UserService,
    private modalService: NgbModal,
    private toasterService: ToasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
    this.userName = this.userService.currentUserValue.userName;
  }

  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      centered: true,
    });
  }

  logout() {
    this.userService.logout();
    this.modalService.dismissAll();
    this.userService.clear();
    this.toasterService.show(TOASTER_MESSAGES.LOGOUT_SUCCESS, {
      classname: "bg-success text-light",
    });
    this.router.navigate([PAGES.PUBLIC]);
  }
}
