import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import { Menu } from '../../models/menu.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
   menuItems: Menu[];
   userName: string;

  constructor(private menuService: MenuService, private userService: UserService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
    this.userName = this.userService.currentUserValue.name;
  }

  logout() {}
}
