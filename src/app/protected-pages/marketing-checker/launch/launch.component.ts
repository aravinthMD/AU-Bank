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
import {MatDialog} from '@angular/material/dialog';
import { FilePreviewDialogBoxComponent } from './file-preview-dialog-box/file-preview-dialog-box.component';
import {environment} from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';


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

  blockedFrom : any ;
  blockedTo : any;
  blockedBy : any;
  id : any;

  FromBlockTimeHour : number;
  FromBlockTimeMinute : number;
  ToBlockTimeHour : number;
  ToBlockTimeMinute : number;

  previewFileUrl : any;
  host : any = environment.host;
  newAppiyoDrive  = environment.previewDocappiyoDrive;

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
  ];

  tableHeaders = ["Template Id", 
                  "Template", 
                  "Campaign Start Date", 
                  "Upload Time",
                  "Campaign End Date",
                  "Campaign Type",
                  "Action",
                  "PDF"];

  constructor(
    private formBuilder: FormBuilder,
    private referenceService: ReferenceService,
    private userService: UserService,
    private toasterService: ToasterService,
    private ngbModal: NgbModal,
    private previewDialog: MatDialog,
    private sanitizer: DomSanitizer
  ) {
    this.form = this.formBuilder.group({
      fromDate: [null, Validators.required],
      toDate: [null, Validators.required],
      // filterType: [TEMPLATE_STATUS_CODES.ALL, Validators.required],
      filterTemplateType : [this.filterTemplateOptions[0].value,Validators.required]
    });
  }

  ngOnInit(): void {
    // this.getBlockTriggerTime(); //New
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

    const formattedFromDate = fromDate ? `${fromDate.year}-${fromDate.month}-${fromDate.day}` : "";
    const formattedToDate = toDate ? `${toDate.year}-${toDate.month}-${toDate.day}` : "";
    const filterTemplateType = fieldControls.filterTemplateType.value;

    // const filterType = fieldControls.filterType.value;

    // const statusCode =
    //   filterType === TEMPLATE_STATUS_CODES.ALL ? "" : filterType;
    const statusCode = "";
    this.userService
      .fetchCheckerScreenTemplates(
        this.currentPage,
        formattedFromDate,
        formattedToDate,
        statusCode,"","",
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
    this.userService.fetchCheckerScreenTemplates(this.currentPage, "", "", "","","","").subscribe(
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
    let triggerTimeValidFlag : boolean;
    if(this.triggerTimeValidator(template)){
      triggerTimeValidFlag = false
    }else{
      triggerTimeValidFlag = true;
    }
    const dialog = this.ngbModal.open(ApproveTemplateDialogComponent, {
      centered: true,
    });
    if(template.documentId !== null)
    {
    this.previewFileUrl = this.host+this.newAppiyoDrive+template.documentId;
    }
    else{
      this.previewFileUrl = null;
    }
    dialog.componentInstance.inputData = template;
    dialog.componentInstance.previewUrl = this.previewFileUrl;
    dialog.componentInstance.triggerTimeValidFlag = triggerTimeValidFlag;
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

  openFilePreviewDialog(Template : any,type : string)
  {
    if(type == 'pdf'){
      this.previewFileUrl = this.host+this.newAppiyoDrive+Template.documentId;
    }else if(type == 'csv'){
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
    this.form.controls['filterTemplateType'].patchValue(this.filterTemplateOptions[0].value);
    this.isFilterValid = false;
    this.fetchTemplates();
  }

  getBlockTriggerTime(){
    this.userService.getTriggerTimeBlock("1").subscribe((response) =>{
      console.log(response);
      const {
        ProcessVariables: {  message = {} },
      } = response;
      if(true){
        const {
          ProcessVariables : {blockedBy ,blockedFrom,blockedTo,id }
        } = response;
        this.blockedBy = blockedBy;
        this.blockedFrom = blockedFrom;
        this.blockedTo = blockedTo;
        this.id = id;
        this.configurable();
      }else{

      }
    })
  }

  configurable(){
    let FromBlockTimeArr = this.blockedFrom ? this.blockedFrom.split(":") : null
    let ToBlockTimeArr = this.blockedTo ? this.blockedTo.split(":") : null;
 
    this.FromBlockTimeHour = FromBlockTimeArr ? Number(FromBlockTimeArr[0]) : null;
    this.FromBlockTimeMinute  = FromBlockTimeArr ? Number(FromBlockTimeArr[1]) : null;

    this.ToBlockTimeHour = ToBlockTimeArr ? Number(ToBlockTimeArr[0]) : null;
    this.ToBlockTimeMinute = ToBlockTimeArr ? Number(ToBlockTimeArr[1]) : null;
   }


  //  triggerTimeValidator(){
  //   const fieldControls = this.form.controls["triggerTime"].value;
  //   const validateHour : number = fieldControls.hour ? Number(fieldControls.hour) : null;
  //   const validateMinute : number= fieldControls.minute ? Number(fieldControls.minute) : null;

  //   if(validateHour > this.FromBlockTimeHour && validateHour < this.ToBlockTimeHour){
  //     this.warningPopUp();
  //   }
  //   else if(validateHour == this.FromBlockTimeHour || validateHour == this.ToBlockTimeHour){
  //     if(validateHour == this.FromBlockTimeHour && validateMinute >= this.FromBlockTimeMinute){
  //      this.warningPopUp();
  //     }
  //     if(validateHour == this.ToBlockTimeHour && validateMinute <= this.ToBlockTimeMinute)
  //     {
  //       this.warningPopUp();
  //     }

  //   }
  // }


   triggerTimeValidator(template : any) : boolean{
     const triggerTime = template ? (template.triggerTime ? template.triggerTime : null) : null;
      let triggerTimeArray = triggerTime ? triggerTime.split(":") : null;
      let fromBlockTimeHour = triggerTimeArray ? Number(triggerTimeArray[0]) : null;
      let FromBlockTimeMinute = triggerTimeArray ? Number(triggerTimeArray[1]) : null;

      if(fromBlockTimeHour > this.FromBlockTimeHour && fromBlockTimeHour < this.ToBlockTimeHour){
        return true;
      }
      else if(fromBlockTimeHour == this.FromBlockTimeHour || fromBlockTimeHour == this.ToBlockTimeHour){
        if(fromBlockTimeHour == this.FromBlockTimeHour && FromBlockTimeMinute >= this.FromBlockTimeMinute){
          return true
        }
        if(fromBlockTimeHour == this.ToBlockTimeHour && FromBlockTimeMinute <= this.ToBlockTimeMinute)
        {
          return true;
        }
  
      }
      
   }
}
