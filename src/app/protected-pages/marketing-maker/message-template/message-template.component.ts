import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators ,AbstractControl, ValidatorFn } from "@angular/forms";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { TriggerTimeValidator} from "src/app/shared/validators/TriggerTimeValidator";
import timeZones from 'src/app/shared/JsonFiles/timeZone.json'
import countryCodes from 'src/app/shared/JsonFiles/countryCodes.json';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: "app-message-template",
  templateUrl: "./message-template.component.html",
  styleUrls: ["./message-template.component.scss"],
})
export class MessageTemplateComponent implements OnInit {

  @ViewChild("labelImport") labelImport: ElementRef;

  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  form: FormGroup;
  dropdownSettings = {};

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;
  onlyPdf:boolean = false;
  minTime:any;

  loading = false;
  fileToUpload: any;
  fileUploadFlag : boolean;
  documentUploadId : any;
  defaultTime = { hour: new Date().getHours(), minute: new Date().getMinutes() };
  timeZones:any = timeZones;
  countryCodeList:any = countryCodes;
  filteredOptions: Observable<string[]>;
  


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService,
  ) {
    this.form = this.formBuilder.group({
      template: [null, Validators.required],
      campaignStartDate: [new Date(), Validators.required],
      campaignEndDate: [null, Validators.required],
      triggerTime: [null, [Validators.required,TriggerTimeValidator()]],
      timeZone: ["",Validators.required],
      countryCodes: ["",Validators.required],
      importFile: [null],
    });


    //changes

    
    
  }

  ngOnInit(): void {
    this.setValidators();

    this.dropdownSettings = {
      singleSelection: false,
      idField: "dial_code",
      textField: "name",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      limitSelection:5
    };

    //AutoComplete

    
    this.filteredOptions = this.form.controls['timeZone'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  
     

  }

  private _filter(value: string): string[] {

    const filterValue = value ? value.toLowerCase() : "";

    return this.timeZones.filter(timeZone => timeZone.text.toLowerCase().includes(filterValue));
  }


  displayFn(SelectedId){
    if(!SelectedId) return '';
    let index = this.timeZones.findIndex(timeZone => timeZone.utc[0] === SelectedId);
    return this.timeZones[index].text;

  }

  

  setValidators(): void {
    const date = new Date();
    console.log("Date"+date.getDate()+" "+date.getFullYear()+" "+date.getMonth())
    this.fromMinDate = {
      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDate(),
    };
    // this.startDate = {
    //   year: date.getFullYear(),
    //   month: date.getMonth(),
    //   day: date.getDay(),
    // }
    // this.startDate = date;

    this.toMinDate = {
      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDate(),
    };
    this.minTime = {
      hour:date.getHours(),
      minute:date.getMinutes(),
    }
  }

  onFromDateChange(event: NgbDate): void {
    const { year, month, day } = event;
    this.toMinDate = { year, month, day };

  }

  // triggerTimeValidator()
  // {
  //   debugger;
  //   const date = new Date();
  //   const currentHour : number = date.getHours();
  //   const currentMinute : number = date.getMinutes();
  //   console.log("Current Date:"+date.getHours());
  //   const fieldControls = this.form.controls;
  //     const triggerTime = fieldControls.triggerTime.value;
  //   console.log("Hours "+`${triggerTime.hour}`);
  //   const selectedtimeHour  = Number(`${triggerTime.hour}`);
  //   const selectedtimeMinute = Number(`${triggerTime.minute}`)
  //   if(selectedtimeHour < currentHour ){
  //     this.triggerTimeExceedCurrentTime = true; //TimeExceedError
  //   }else if(selectedtimeHour == selectedtimeHour){
  //     if(selectedtimeMinute < currentMinute){
  //     this.triggerTimeExceedCurrentTime = true
  //     }else{
  //       this.triggerTimeExceedCurrentTime = false;
  //     }
  //   }
  //   else{
  //     this.triggerTimeExceedCurrentTime = false;
  //   }
  // }

  onToDateChange(event: NgbDate): void {
    const { year, month, day } = event;
    this.fromMaxDate = { year, month, day };
  }




  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      const fieldControls = this.form.controls;
      const campaignStartDate = fieldControls.campaignStartDate.value;
      const triggerTime = fieldControls.triggerTime.value;
      const campaignEndDate = fieldControls.campaignEndDate.value;
      this.fileUploadFlag = fieldControls.importFile.value ? true : false;
      const timeZones = fieldControls.timeZone.value;
      const countryCodes = fieldControls.countryCodes.value;

      // tslint:disable-next-line: max-line-length
      const transformedStartDate = `${campaignStartDate.year}-${campaignStartDate.month}-${campaignStartDate.day}`;
      const transformedEndDate = `${campaignEndDate.year}-${campaignEndDate.month}-${campaignEndDate.day}`;
      this.userService
        .createMessageTemplate(
          fieldControls.template.value,
          transformedStartDate,
          transformedEndDate,
          `${triggerTime.hour}:${triggerTime.minute}:00`,
          String(this.userService.currentUserValue.userId),this.fileUploadFlag,this.documentUploadId,timeZones,countryCodes
        )
        .subscribe(
          (createdMessageTemplate) => {
            const {
              ProcessVariables: { status },
              ProcessVariables: { message = {} },
            } = createdMessageTemplate;
            if (status) {
              this.toasterService.showSuccess(
                TOASTER_MESSAGES.CREATE_MESSAGE_TEMPLATE_SUCCESS
              );
              this.form.reset();
              this.form.controls['timeZone'].setValue("");
              this.labelImport.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE;
              this.documentUploadId = null;
              this.loading = false;
              this.fileToUpload = null
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

  // onFileChange(event)
  // {
  //   if(event.target.files.length > 0)
  //   {
  //     const file = event.target.files[0];
  //     this.fileToUpload = file;

  //   }
  // }

  onFileChange(files: FileList) {
    debugger;
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map((f) => f.name)
      .join(", ");
    this.fileToUpload = files.item(0);
    if(this.fileToUpload["type"] == "application/pdf"){
      this.onlyPdf = false;
      console.log("FiletoUpload"+this.fileToUpload);
    const userId = String(this.userService.currentUserValue.userId);
    const modifiedFile = Object.defineProperty(this.fileToUpload, "name", {
      writable: true,
      value: this.fileToUpload["name"]
    });
    modifiedFile["name"] = userId + "-" + new Date().getTime() + "-" + modifiedFile["name"];
    console.log(modifiedFile);
    this.uploadToAppiyoDrive(modifiedFile);
    }else{
      this.onlyPdf = true;
    }
    
  }

  cancelFileUpload()
  {
   // this.form.setValue({importFile : ''});
    this.form.controls['importFile'].reset();
    this.fileToUpload = null;
    this.fileUploadFlag = false
    this.documentUploadId = null;
    this.labelImport.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE;
    this.onlyPdf = false;
  }

  getFileSize(size: any) {

    let FileSize = size / 1024 / 1024; // in MB
    if (FileSize > 2) {
        //this.isErrorModal = true;
       // this.errorMessage = "File size exceeds 2 MB";

       // $(file).val(''); //for clearing with Jquery
       return null;
    } else {

      size = size / 1024;

      let isMegaByte = false;
      if (size >= 1024) {
        size = size / 1024;
        isMegaByte = true;
      }

      let fileSize: string;
      if (isMegaByte) {
        fileSize = size.toFixed(2) + " MB";
      } else {
        fileSize = size.toFixed(2) + " KB";
      }

      return fileSize;
    }
  }

  uploadToAppiyoDrive(file : any)
  {
    this.userService.uploadToAppiyoDrive(file).subscribe(
      (response) =>
      {
        console.log(response)
        if(response["ok"])
        {
          this.documentUploadId = response["info"]["id"];
          this.toasterService.showSuccess(TOASTER_MESSAGES.FILE_UPLOAD_SUCCESS);
        }
        else{
          this.toasterService.showError(TOASTER_MESSAGES.FILE_UPLOAD_FAILURE);
        }
      },
      (error) =>
      {
        this.toasterService.showError(TOASTER_MESSAGES.FILE_UPLOAD_FAILURE);
        console.log(error);
      }
    );
  }

  
}
