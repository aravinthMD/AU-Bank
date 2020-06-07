export class Menu {
  constructor(
    public id: number,
    public title: string,
    public routerLink: string,
  ) {}
}

// Admin Menu Items
export const ADMIN_MENU_ITEMS = [
  new Menu(10, 'User Creation', '/user-creation'),
  new Menu(20, 'Block Whatsapp', '/block-whatsapp'),
  new Menu(30, 'Design Template', '/design-template'),
  new Menu(40, 'Change Password', '/change-password'),
];

// Call Center Admin Menu Items
export const CALL_CENTER_ADMIN_MENU_ITEMS = [
  new Menu(10, 'Block Whatsapp', '/block-whatsapp'),
  new Menu(20, 'Change Password', '/change-password'),
];

// Marketing Admin Menu Items
export const MARKETING_ADMIN_MENU_ITEMS = [
  new Menu(10, 'Design Template', '/design-template'),
  new Menu(20, 'Change Password', '/change-password'),
];
