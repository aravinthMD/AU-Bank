import {
  Component,
  OnInit,
  ViewEncapsulation,
  TemplateRef,
} from "@angular/core";
import { UserService } from "../../services/user.service";
import { MenuService } from "../../services/menu.service";
import { Menu } from "../../models/menu.model";
import { Router } from "@angular/router";
import { PAGES, TOASTER_MESSAGES, BUTTON_TEXTS } from "../../utils/constant";
import { ToasterService } from "../../services/toaster.service";
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
    private ngbModal: NgbModal,
    private toasterService: ToasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
    this.userName = this.userService.currentUserValue.userName;
  }


}
