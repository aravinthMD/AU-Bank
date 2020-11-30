import { Component, OnInit } from "@angular/core";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "src/app/shared/services/user.service";
import { ReferenceService } from "src/app/shared/services/reference.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { TEMPLATE_STATUS_CODES } from "src/app/shared/utils/constant";
import {environment} from "src/environments/environment";
import {MatDialog} from '@angular/material/dialog';
import {FilePreviewDialogBoxComponent} from './file-preview-dialog-box/file-preview-dialog-box/file-preview-dialog-box.component';
import { from } from 'rxjs';


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

  filterTemplateOptions = [
    {name : "ALL" ,value:"0"},
    {name:"Message",value :"1"},
    {name : "Promotional",value:"2"},
    {name : "PreApproved",value:"3"}
  ]

  previewFileUrl : any;
  host : any = environment.host;
  newAppiyoDrive  = environment.newAppiyoDrive;

  tableHeaders = ["Template Id", "Template", "Campaign StartDate","Trigger Time","Campaign EndDate","Template Type","Status","Reason","PDF","CSV "];

  constructor(
    private formBuilder: FormBuilder,
    private referenceService: ReferenceService,
    private userService: UserService,
    private toasterService: ToasterService,
    private previewDialog: MatDialog,
  ) {
    this.form = this.formBuilder.group({
      fromDate: [null,Validators.required],
      toDate: [null, Validators.required],
      filterType: [TEMPLATE_STATUS_CODES.ALL, Validators.required],
      filterTemplateType : [this.filterTemplateOptions[0].value,Validators.required]
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
    this.validate(false);
  }

  onToDateChange(event: NgbDate): void {
    const { year, month, day } = event;
    this.fromMaxDate = { year, month, day };
    this.validate(false);
  }

  onFilterTypeChange(event: any) {
    this.validate(true);
  }

  validate(filterFlag) {
    if (this.form.valid || filterFlag) {
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

    const formattedFromDate =  fromDate ? `${fromDate.year}-${fromDate.month}-${fromDate.day}` : "";
    const formattedToDate =  toDate ? `${toDate.year}-${toDate.month}-${toDate.day}` : "";
    const filterType = fieldControls.filterType.value;
    const filterTemplateType = fieldControls.filterTemplateType.value;

    const statusCode =
      filterType === TEMPLATE_STATUS_CODES.ALL ? "" : filterType;
    this.userService
      .fetchTemplates(
        this.currentPage,
        formattedFromDate,
        formattedToDate,
        statusCode,
        filterTemplateType
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
    this.userService.fetchTemplates(this.currentPage, "", "", "","").subscribe(
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

  openFilePreviewDialog(Template : any,type : string)
  {
    if(type == 'pdf'){
    this.previewFileUrl = this.host+this.newAppiyoDrive+Template.documentId;
    } else if(type == 'csv'){
    this.previewFileUrl = this.host+this.newAppiyoDrive+Template.csvDocId;
    }
    console.log("Preview Url"+this.previewFileUrl)
    const dialogRef = this.previewDialog.open(FilePreviewDialogBoxComponent,{
      data: {previewData : this.previewFileUrl,
              templateId : Template.id},
      width: '1000px',
    });
  }

  clearFilter()
  {
    this.form.reset();
    this.form.controls['filterType'].patchValue(TEMPLATE_STATUS_CODES.ALL);
    this.form.controls['filterTemplateType'].patchValue(this.filterTemplateOptions[0].value);
    this.isFilterValid = false;
    this.fetchTemplates();
  }

}
