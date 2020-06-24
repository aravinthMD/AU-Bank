import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IAngularMyDpOptions } from "angular-mydatepicker";
import { addDays, subDays } from "date-fns";
import { DATE_FORMATS, BUTTON_TEXTS } from "src/app/shared/utils/constant";

@Component({
  selector: "app-launch",
  templateUrl: "./launch.component.html",
  styleUrls: ["./launch.component.scss"],
})
export class LaunchComponent implements OnInit {
  launchButtonText = BUTTON_TEXTS.LAUNCH_BUTTON_TEXT;
  form: FormGroup;

  filterOptions = ["All", "Blocked", "Unblocked"];

  today = new Date();

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;

  fromDateOptions: IAngularMyDpOptions;
  toDateOptions: IAngularMyDpOptions;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fromDate: [null, Validators.required],
      toDate: [null, Validators.required],
      filterType: ["All", Validators.required],
    });
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
}
