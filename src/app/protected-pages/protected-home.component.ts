import { Component, OnInit } from '@angular/core';
import { Menu } from '../shared/models/menu.model';
import { MenuService } from '../shared/services/menu.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-protected-home',
  templateUrl: './protected-home.component.html',
  styleUrls: ['./protected-home.component.scss'],
})
export class ProtectedHomeComponent implements OnInit {
  menuItems: Menu[];
  userName: string;
  currentYear = new Date().getFullYear();

 constructor(private menuService: MenuService, private userService: UserService) { }

 ngOnInit(): void {
   this.menuItems = this.menuService.getMenuItems();
   this.userName = this.userService.currentUserValue.userName;
 }


 logout() {}
}
