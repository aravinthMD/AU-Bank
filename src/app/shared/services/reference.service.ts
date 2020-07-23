import { Injectable } from "@angular/core";
import { MENU_TITLES, PAGES } from "../utils/constant";

@Injectable({
  providedIn: "root",
})
export class ReferenceService {
  constructor() {}

  getWhatsappTableHeaders(): string[] {
    return [
      "Customer Mobile Number",
      "Opt In",
      "Date Of Opt In",
      "Opt In Channel",
      "Opt Out",
      "Date Of Opt Out",
      "Opt Out Channel",
      "Request Id if blocked earlier",
      "Block Date",
      "Status",
      "Block Customer",
      "Reason",
      "SR No",
    ];
  }

  getDefaultDateValidators() {
    const date = new Date();
    const minDate = { year: 0, month: 0, day: 0 };
    const maxDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };

    return { minDate, maxDate };
  }

  getAvailableAccessControls(): object[] {
    return [
      {
        title: MENU_TITLES.VIEW_WHATSAPP,
        routerPath: PAGES.VIEW_WHATSAPP,
        value: 1,
      },
      {
        title: MENU_TITLES.BLOCK_WHATSAPP,
        routerPath: PAGES.BLOCK_WHATSAPP,
        value: 2,
      },
      {
        title: MENU_TITLES.MARKETING_MAKER,
        routerPath: PAGES.MARKETING_MAKER,
        value: 3,
      },
      {
        title: MENU_TITLES.MARKETING_CHECKER,
        routerPath: PAGES.MARKETING_CHECKER,
        value: 4,
      },
    ];
  }
}
