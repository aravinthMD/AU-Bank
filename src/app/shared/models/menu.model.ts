export class Menu {
  constructor(
    public id: number,
    public title: string,
    public routerLink: string,
    public hasSubMenu: boolean,
    public parentId: number
  ) {}
}

// Super Admin Items
export const SUPER_ADMIN_MENU_ITEMS = [
  new Menu(10, "Admin/User Creation", "/user-creation", false, 0),
  new Menu(20, "Manage Users", "/manage-users", false, 0),
];

// Admin Menu Items
export const ADMIN_MENU_ITEMS = [
  new Menu(10, "User Creation", "/user-creation", false, 0),
  new Menu(20, "Manage Users", "/manage-users", false, 0),
  new Menu(30, "Configure BlockTime","/configure-triggerTime",false,0),
  new Menu(40,"Add Template","/template/master",false,0),
];
