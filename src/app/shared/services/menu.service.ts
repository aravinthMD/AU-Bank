import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor( private userService: UserService) {}

  public getMenuItems(): Menu[] {
    return this.userService.currentMenuValue;
  }

}
