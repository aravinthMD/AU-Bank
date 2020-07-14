import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  BUTTON_TEXTS,
  PAGES,
  REPORT_FILTER_TYPES,
  TOASTER_MESSAGES,
} from "src/app/shared/utils/constant";
import { Router } from "@angular/router";
import { NgbDate, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BlockWhatsappDialogComponent } from "./block-whatsapp-dialog.component";
import { ReferenceService } from "src/app/shared/services/reference.service";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";

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
    private userService: UserService,
    private toasterService: ToasterService,
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
    const { value } = input;
    this.validSearch = value.length === 10;
    if (this.validSearch) {
      this.fetchUserByMobileNumber(value);
    } else {
      this.userDetail = null;
    }
  }

  fetchUserByMobileNumber(mobileNumber: string): void {
    this.searchLoading = true;
    this.userService
      .fetchUserByMobileNumber(mobileNumber)
      .subscribe((response) => {
        const {
          ProcessVariables: { blockLog },
        } = response;
        if (blockLog) {
          const [data] = blockLog;
          this.userDetail = data;
          console.log(this.userDetail);
        } else {
          this.toasterService.show(TOASTER_MESSAGES.USER_NOT_FOUND, {
            classname: "bg-danger text-light",
          });
        }
        this.searchLoading = false;
      });
  }

  onSubmit(): void {
    const fieldControls = this.form.controls;

    const fromDate = fieldControls.fromDate.value;
    const toDate = fieldControls.toDate.value;
    const filterType = fieldControls.filterType.value;

    console.log(fromDate, toDate, filterType);
  }

  openBlockWhatsappDialog({ mobile, optId }): void {
    const dialog = this.ngbDialog.open(BlockWhatsappDialogComponent, {
      centered: true,
    });
    dialog.componentInstance.mobile = mobile;
    dialog.componentInstance.optId = optId;
  }
}
