import { Component, OnInit } from "@angular/core";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "src/app/shared/services/user.service";
import { ReferenceService } from "src/app/shared/services/reference.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { TEMPLATE_STATUS_CODES } from "src/app/shared/utils/constant";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
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

  tableHeaders = ["Template Id", "Template", "Schedule", "Status"];

  constructor(
    private formBuilder: FormBuilder,
    private referenceService: ReferenceService,
    private userService: UserService,
    private toasterService: ToasterService
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
            this.currentPage = this.currentPage;
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
}
