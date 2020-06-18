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
  new Menu(10, "User Creation", "/user-creation", false, 0),
];

// Admin Menu Items
export const ADMIN_MENU_ITEMS = [
  new Menu(10, "User Creation", "/user-creation", false, 0),
  // new Menu(20, "Block Whatsapp", "/block-whatsapp", false, 0),

  // new Menu(30, "Design Template", null, true, 0),
  // new Menu(31, "Message Template", "/design-template/message", false, 30),
  // new Menu(32, "Promotional Template", "/design-template/promotional", false, 30),
  // new Menu(33, "Launch", "/design-template/launch", false, 30),

  // new Menu(40, "Change Password", "/change-password", false, 0),
];
