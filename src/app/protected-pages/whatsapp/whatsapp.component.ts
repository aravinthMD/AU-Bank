import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  BUTTON_TEXTS,
  PAGES,
  REPORT_FILTER_TYPES,
} from "src/app/shared/utils/constant";
import { Router } from "@angular/router";
import { NgbDate, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BlockWhatsappDialogComponent } from "./block-whatsapp-dialog.component";
import { ReferenceService } from "src/app/shared/services/reference.service";

@Component({
  selector: "app-whatsapp",
  templateUrl: "./whatsapp.component.html",
  styleUrls: ["./whatsapp.component.scss"],
})
export class WhatsappComponent implements OnInit {
  blockButtonText = BUTTON_TEXTS.BLOCK_BUTTON_TEXT;
  downloadButtonText = BUTTON_TEXTS.DOWNLOAD_BUTTON_TEXT;

  filterOptions = Object.values(REPORT_FILTER_TYPES);
  tableHeaders: string[] = [];

  isViewOnly = false;

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private referenceService: ReferenceService,
    private ngbDialog: NgbModal
  ) {
    this.form = this.formBuilder.group({
      fromDate: [null, Validators.required],
      toDate: [null, Validators.required],
      filterType: [this.filterOptions[0], Validators.required],
    });

    const { url } = this.router;
    const tableHeaders = this.referenceService.getWhatsappTableHeaders();

    if (url === PAGES.VIEW_WHATSAPP) {
      this.isViewOnly = true;
      this.tableHeaders = [...tableHeaders].filter(
        (header) => header !== "Block Customer"
      );
    } else {
      this.isViewOnly = false;
      this.tableHeaders = [...tableHeaders];
    }
    this.setValidators();
  }

  ngOnInit(): void {}

  setValidators(): void {
    const {
      minDate,
      maxDate,
    } = this.referenceService.getDefaultDateValidators();

    this.fromMinDate = minDate;
    this.fromMaxDate = maxDate;

    this.toMinDate = minDate;
    this.toMaxDate = maxDate;
  }

  onFromDateChange(event: NgbDate): void {
    const { year, month, day } = event;
    this.toMinDate = { year, month, day };
  }

  onToDateChange(event: NgbDate): void {
    const { year, month, day } = event;
    this.fromMaxDate = { year, month, day };
  }

  validate(input: HTMLInputElement) {
    const value = input.value;
    this.validSearch = value.length === 10;
    if (this.validSearch) {
      this.fetchUser();
    } else {
      this.userDetail = null;
    }
  }

  fetchUser(): void {
    this.searchLoading = true;
    this.userDetail = {
      mobileNumber: "+91 9894192798",
      optInStatus: "Opt In",
      optInDate: "26/06/2020",
      optInChannel: "SMS",
      optOutStatus: "Opt In",
      optOutDate: "26/06/2020",
      optOutChannel: "SMS",
      requestId: "RQ32426299",
      blockDate: "26/06/2020",
      userName: "DURGA",
      status: "OPT IN",
      reason: "",
      srNumber: "",
    };
    this.searchLoading = false;
  }

  onSubmit(): void {
    const fieldControls = this.form.controls;

    const fromDate = fieldControls.fromDate.value;
    const toDate = fieldControls.toDate.value;
    const filterType = fieldControls.filterType.value;

    console.log(fromDate, toDate, filterType);
  }

  openBlockWhatsappDialog({ userName, mobileNumber }): void {
    const dialog = this.ngbDialog.open(BlockWhatsappDialogComponent, {
      centered: true,
    });
    dialog.componentInstance.userName = userName;
    dialog.componentInstance.mobileNumber = mobileNumber;
  }
}
