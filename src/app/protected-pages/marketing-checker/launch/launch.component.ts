import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  BUTTON_TEXTS,
  RESPONSES,
  TEMPLATE_STATUS_CODES,
} from "src/app/shared/utils/constant";
import { NgbDate, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ApproveTemplateDialogComponent } from "./approve-template-dialog.component";
import { ReferenceService } from "src/app/shared/services/reference.service";
import { RejectTemplateDialogComponent } from "./reject-template-dialog.component";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";

@Component({
  selector: "app-launch",
  templateUrl: "./launch.component.html",
  styleUrls: ["./launch.component.scss"],
})
export class LaunchComponent implements OnInit {
  launchButtonText = BUTTON_TEXTS.LAUNCH_BUTTON_TEXT;
  rejectButtonText = BUTTON_TEXTS.REJECT_BUTTON_TEXT;

  loading = false;
  form: FormGroup;

  currentPage = 1;
  pageSize = 10;
  collectionSize: number;
  templates = [];

  isFilterValid = false;
  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;

  filterOptions = [
    { name: "ALL", value: "40" },
    { name: "SUBMITTED", value: "10" },
    { name: "APPROVED", value: "30" },
    { name: "REJECTED", value: "20" },
  ];

  tableHeaders = ["Template Id", "Template", "Schedule", "Action"];

  constructor(
    private formBuilder: FormBuilder,
    private referenceService: ReferenceService,
    private userService: UserService,
    private toasterService: ToasterService,
    private ngbModal: NgbModal
  ) {
    this.form = this.formBuilder.group({
      fromDate: [null, Validators.required],
      toDate: [null, Validators.required],
      filterType: [TEMPLATE_STATUS_CODES.ALL, Validators.required],
    });
  }

  ngOnInit(): void {
    this.setValidators();
    this.fetchTemplates();
  }

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
    this.validate();
  }

  onToDateChange(event: NgbDate): void {
    const { year, month, day } = event;
    this.fromMaxDate = { year, month, day };
    this.validate();
  }

  onFilterTypeChange(event: any) {
    this.validate();
  }

  validate() {
    if (this.form.valid) {
      this.isFilterValid = true;
      this.fetchFilteredTemplates();
    } else {
      this.isFilterValid = false;
    }
  }

  onPageChanged(currentPage: number) {
    this.currentPage = currentPage;
    if (this.isFilterValid) {
      this.fetchFilteredTemplates();
    } else {
      this.fetchTemplates();
    }
  }

  fetchFilteredTemplates() {
    this.templates = null;
    window.scroll(0, 0);
    this.loading = true;
    const fieldControls = this.form.controls;
    const fromDate = fieldControls.fromDate.value;
    const toDate = fieldControls.toDate.value;

    const formattedFromDate = `${fromDate.year}-${fromDate.month}-${fromDate.day}`;
    const formattedToDate = `${toDate.year}-${toDate.month}-${toDate.day}`;
    const filterType = fieldControls.filterType.value;

    const statusCode =
      filterType === TEMPLATE_STATUS_CODES.ALL ? "" : filterType;
    this.userService
      .fetchTemplates(
        this.currentPage,
        formattedFromDate,
        formattedToDate,
        statusCode
      )
      .subscribe(
        (fetchedTemplates) => {
          const {
            ProcessVariables: { status },
            ProcessVariables: { message = {} },
          } = fetchedTemplates;
          if (status) {
            this.templates = fetchedTemplates.ProcessVariables.templateList;
            this.collectionSize = fetchedTemplates.ProcessVariables.totalCount;
            this.loading = false;
          } else {
            this.loading = false;
            this.toasterService.showError(message.value);
          }
        },
        (error) => {
          this.loading = false;
          this.toasterService.showError(error);
        }
      );
  }

  fetchTemplates() {
    this.templates = null;
    window.scroll(0, 0);
    this.loading = true;
    this.userService.fetchTemplates(this.currentPage, "", "", "").subscribe(
      (fetchedTemplates) => {
        const {
          ProcessVariables: { status },
          ProcessVariables: { message = {} },
        } = fetchedTemplates;
        if (status) {
          this.templates = fetchedTemplates.ProcessVariables.templateList;
          this.collectionSize = fetchedTemplates.ProcessVariables.totalCount;
          this.loading = false;
        } else {
          this.loading = false;
          this.toasterService.showError(message.value);
        }
      },
      (error) => {
        this.loading = false;
        this.toasterService.showError(error);
      }
    );
  }
  openApproveTemplateDialog(template: any): void {
    const dialog = this.ngbModal.open(ApproveTemplateDialogComponent, {
      centered: true,
    });
    dialog.componentInstance.inputData = template;
    dialog.result.then((response) => {
      if (response === RESPONSES.SUCCESS) {
        if (this.isFilterValid) {
          this.fetchFilteredTemplates();
        } else {
          this.fetchTemplates();
        }
      }
    });
  }

  openRejectTemplateDialog(template: any): void {
    const dialog = this.ngbModal.open(RejectTemplateDialogComponent, {
      centered: true,
    });
    dialog.componentInstance.inputData = template;
    dialog.result.then((response) => {
      if (response === RESPONSES.SUCCESS) {
        if (this.isFilterValid) {
          this.fetchFilteredTemplates();
        } else {
          this.fetchTemplates();
        }
      }
    });
  }
}
