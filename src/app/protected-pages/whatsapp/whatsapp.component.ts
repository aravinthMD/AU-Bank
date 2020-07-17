import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  BUTTON_TEXTS,
  PAGES,
  TOASTER_MESSAGES,
} from "src/app/shared/utils/constant";
import { Router } from "@angular/router";
import { NgbDate, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BlockWhatsappDialogComponent } from "./block-whatsapp-dialog.component";
import { ReferenceService } from "src/app/shared/services/reference.service";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { saveAs } from "file-saver";

@Component({
  selector: "app-whatsapp",
  templateUrl: "./whatsapp.component.html",
  styleUrls: ["./whatsapp.component.scss"],
})
export class WhatsappComponent implements OnInit {
  blockButtonText = BUTTON_TEXTS.BLOCK_BUTTON_TEXT;
  downloadButtonText = BUTTON_TEXTS.DOWNLOAD_BUTTON_TEXT;

  filterOptions = ["BLOCKED"];
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
        if (response) {
          const {
            ProcessVariables: { blockLog },
          } = response;
          if (blockLog) {
            const [data] = blockLog;
            this.userDetail = data;
            this.searchLoading = false;
          } else {
            this.toasterService.show(TOASTER_MESSAGES.USER_NOT_FOUND, {
              classname: "bg-danger text-light",
            });
            this.searchLoading = false;
          }
        } else {
          this.searchLoading = false;
          this.userService.closeAndLogout();
        }
      });
  }

  get fieldControls() {
    return this.form.controls;
  }

  downloadReport(next?: number): void {
    this.reportLoading = true;
    const fromDate = this.fieldControls.fromDate.value;
    const toDate = this.fieldControls.toDate.value;
    const filterType = this.fieldControls.filterType.value;

    const formattedFromDate = `${fromDate.year}-${fromDate.month}-${fromDate.day}`;
    const formattedToDate = `${toDate.year}-${toDate.month}-${toDate.day}`;
    this.userService
      .downloadReport(
        this.userDetail ? this.userDetail.mobile : -1,
        formattedFromDate,
        formattedToDate,
        true,
        next
      )
      .subscribe((response) => {
        if (response) {
          const {
            ProcessVariables: { status, downloadContent },
          } = response;
          if (status) {
            this.saveFile(downloadContent);
            this.toasterService.show(TOASTER_MESSAGES.REPORT_DOWNLOAD_SUCCESS, {
              classname: "bg-success text-light",
            });
            this.reportLoading = false;
          } else {
            this.toasterService.show("Something went wrong", {
              classname: "bg-danger text-light",
            });
            this.reportLoading = false;
          }
        } else {
          this.reportLoading = false;
          this.userService.closeAndLogout();
        }
      });
  }

  transform(response, remaining: number, sent: number) {
    console.log(remaining);
    // let contentToDownload: string;
    // const savedData = localStorage.getItem("contentToDownload");

    // if (remaining > 0) {
    //   for (let i = 0; i < remaining; i++) {
    //     if (savedData) {
    //       contentToDownload = savedData.concat(response);
    //       localStorage.setItem("contentToDownload", contentToDownload);
    //     } else {
    //       contentToDownload = response;
    //       localStorage.setItem("contentToDownload", contentToDownload);
    //     }
    //     this.downloadReport(sent);
    //     if (i === remaining) {
    //       this.saveFile(contentToDownload);
    //     }
    //   }
    // } else {
    //   this.saveFile(response);
    // }
  }

  saveFile(content: string): void {
    const fromDate = this.fieldControls.fromDate.value;
    const toDate = this.fieldControls.toDate.value;

    const formattedFromDate = `${fromDate.year}-${fromDate.month}-${fromDate.day}`;
    const formattedToDate = `${toDate.year}-${toDate.month}-${toDate.day}`;

    const fileName = this.userDetail
      ? `${this.userDetail.mobile}-${formattedFromDate}to${formattedToDate}.csv`
      : `${formattedFromDate}to${formattedToDate}.csv`;

    const type = "text/csv";

    const blob = new Blob([content], {
      type,
    });
    saveAs(blob, fileName);
    localStorage.removeItem("contentToDownload");
  }

  openBlockWhatsappDialog({ action, cTime, channel, mobile }): void {
    const dialog = this.ngbDialog.open(BlockWhatsappDialogComponent, {
      centered: true,
    });
    dialog.componentInstance.inputData = { action, cTime, channel, mobile };
    dialog.result.then((res) => {
      if (res === "SUCCESS") {
        this.fetchUserByMobileNumber(mobile);
      }
    });
  }
}
