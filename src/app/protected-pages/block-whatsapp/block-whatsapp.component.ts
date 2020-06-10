import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-block-whatsapp",
  templateUrl: "./block-whatsapp.component.html",
  styleUrls: ["./block-whatsapp.component.scss"],
})
export class BlockWhatsappComponent implements OnInit {
  filterOptions = ["All", "Blocked", "Unblocked"];

  phoneNumber: string;
  form: FormGroup;
  userDetail: any;

  Searchloading = false;
  reportLoading = false;
  validSearch = false;

  today = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;

  maxDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  fromMinDate = {
  };

  fromMaxDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  toMinDate = {
  };

  toMaxDate =  {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };
  titleModel = "";
  showModal;
  UserId: string;
  Firstname: string;
  Lastname: string;
  Email: string;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fromDate: [null, Validators.required],
      toDate: [null, Validators.required],
      filterType: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.form.setValue({
      fromDate: this.today,
      toDate: this.today,
      filterType: "All",
    });
  }

  onFromDateChange(event: any) {

    this.toMinDate = event;
  }

  validate(input: HTMLInputElement) {
    const value = input.value;
    this.validSearch = value.length === 10 ? true : false;
  }

  fetchUser() {
    console.log(this.phoneNumber);
    this.userDetail = {};
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
