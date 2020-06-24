import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IAngularMyDpOptions } from "angular-mydatepicker";
import { addDays, subDays } from "date-fns";
import {
  BUTTON_TEXTS,
  PAGES,
  DATE_FORMATS,
} from "src/app/shared/utils/constant";
import { Router } from "@angular/router";

@Component({
  selector: "app-whatsapp",
  templateUrl: "./whatsapp.component.html",
  styleUrls: ["./whatsapp.component.scss"],
})
export class WhatsappComponent implements OnInit {
  searchButtonText = BUTTON_TEXTS.SEARCH_BUTTON_TEXT;
  submitButtontext = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  filterOptions = ["All", "Blocked", "Unblocked"];

  isViewOnly = false;

  phoneNumber: string;
  form: FormGroup;
  userDetail: any;

  searchLoading = false;
  reportLoading = false;
  validSearch = false;

  today = new Date();

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;

  fromDateOptions: IAngularMyDpOptions;
  toDateOptions: IAngularMyDpOptions;

  titleModel = "";
  showModal;
  UserId: string;
  Firstname: string;
  Lastname: string;
  Email: string;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      fromDate: [null, Validators.required],
      toDate: [null, Validators.required],
      filterType: ["All", Validators.required],
    });
    const { url } = this.router;
    if (url === PAGES.VIEW_WHATSAPP) {
      this.isViewOnly = true;
    } else {
      this.isViewOnly = false;
    }
    this.setValidators();
    this.setDatePickerOptions();
  }

  ngOnInit(): void {}

  setValidators(): void {
    const date = addDays(this.today, 1);
    this.fromMinDate = {
      year: 0,
      month: 0,
      day: 0,
    };

    this.fromMaxDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };

    this.toMinDate = {
      year: 0,
      month: 0,
      day: 0,
    };

    this.toMaxDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
  }

  setDatePickerOptions(): void {
    this.fromDateOptions = {
      dateRange: false,
      dateFormat: DATE_FORMATS.DD_MM_YYYY,
      disableUntil: this.fromMinDate,
      disableSince: this.fromMaxDate,
    };

    this.toDateOptions = {
      dateRange: false,
      dateFormat: DATE_FORMATS.DD_MM_YYYY,
      disableUntil: this.toMinDate,
      disableSince: this.toMaxDate,
    };
  }

  onFromDateChange(event: any): void {
    const { jsDate } = event.singleDate;
    const date = subDays(jsDate, 1);
    this.toMinDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
    this.setDatePickerOptions();
  }

  onToDateChange(event: any): void {
    const { jsDate } = event.singleDate;
    const date = addDays(jsDate, 1);
    this.fromMaxDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
    this.setDatePickerOptions();
  }

  validate(input: HTMLInputElement) {
    const value = input.value;
    this.validSearch = value.length === 10;
    if (this.validSearch) {
      this.fetchUser();
    }
  }

  fetchUser(): void {
    this.searchLoading = true;
    this.userDetail = {};
    this.searchLoading = false;
  }

  onSubmit(): void {
    const fieldControls = this.form.controls;

    const fromDate = fieldControls.fromDate.value;
    const toDate = fieldControls.toDate.value;
    const filterType = fieldControls.filterType.value;

    console.log(fromDate, toDate, filterType);
  }

  onDateChanged(e) {}

  onClick(event) {
    this.showModal = true; // Show-Hide Modal Check
    this.UserId = event.target.id;
    this.Firstname = document.getElementById(
      "firstname" + this.UserId
    ).innerHTML;
    this.Lastname = document.getElementById("lastname" + this.UserId).innerHTML;
    this.Email = document.getElementById("email" + this.UserId).innerHTML;
  }

  hide() {
    this.showModal = false;
  }
}
