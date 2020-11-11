import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { MenuService } from "../../services/menu.service";
import { Router } from "@angular/router";
import { Menu } from '../../models/menu.model';

@Component({
  selector: "app-vertical-menu",
  templateUrl: "./vertical-menu.component.html",
  styleUrls: ["./vertical-menu.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class VerticalMenuComponent implements OnInit {
  @Input() menuItems;
  @Input() menuParentId;

  parentMenu: Menu[];

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit(): void {
    debugger;
    this.parentMenu = this.menuItems.filter(item => item.parentId === this.menuParentId);
  }

  onClick(menuId) {
    console.log(menuId);
  }
}
