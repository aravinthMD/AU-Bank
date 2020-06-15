import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UserService } from "../../services/user.service";
import { MenuService } from "../../services/menu.service";
import { Menu } from "../../models/menu.model";
import { Router } from "@angular/router";
import { PAGES, TOASTER_MESSAGES } from "../../utils/constant";
import { ToasterService } from "../../services/toastr.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit {
  menuItems: Menu[];
  userName: string;

  constructor(
    private menuService: MenuService,
    private userService: UserService,
    private toasterService: ToasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
    this.userName = this.userService.currentUserValue.userName;
  }

  logout() {
    this.userService.logout();
    this.userService.clear();
    this.toasterService.showSuccess(TOASTER_MESSAGES.LOGOUT_SUCCESS);
    this.router.navigate([PAGES.PUBLIC]);
  }
}
