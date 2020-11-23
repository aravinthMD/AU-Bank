import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
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
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { WarningDialogBoxComponent } from '../warning-dialog-box/warning-dialog-box.component';
// import { NgxCsvParser } from 'projects/ngx-csv-parser/src/public-api';
// import { NgxCSVParserError } from 'projects/ngx-csv-parser/src/public-api';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: "app-message-template",
  templateUrl: "./message-template.component.html",
  styleUrls: ["./message-template.component.scss"],
})
export class MessageTemplateComponent implements OnInit {

  @ViewChild("labelImport") labelImport: ElementRef;
  @ViewChild("labelImportCSV") labelImportCSV : ElementRef;
  @Input('timeZonesList') timeZonesListArr : any[];
  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  FromBlockTimeHour : any;
  FromBlockTimeMinute : any;
  ToBlockTimeHour : any;
  ToBlockTimeMinute : any;
 
  fromBlockTime : any;
  toBlockTime :  any;
  timeZoneText : string;

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
  pdfFileToUploadFlag : boolean;
  csvfileToUpload : boolean;
  fileUploadFlag : boolean;
  documentUploadId : any;
  csvdocumentUploadId : any;
  disableTemplateFlag : boolean;
  // defaultTime = { hour: new Date().getHours(), minute: new Date().getMinutes() };
  timeZones:any = timeZones;
  countryCodeList:any = countryCodes;
  filteredOptions: Observable<string[]>;
  csvRecords : any[];
  csvfileFlag:boolean = false
  errorCountArray : string[]  = [];
  stringErrorArray : string;

  defaultTime = {hour :  12,minute : 0}

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService,
    private warningDialog : MatDialog,
    private ngxCsvParser: NgxCsvParser
  ) {
  }

  ngOnInit(): void {
    this.setValidators();
    this.form = this.formBuilder.group({
      template: [null, Validators.required],
      campaignStartDate: [new Date(), Validators.required],
      campaignEndDate: [null, Validators.required],
      triggerTime: [this.defaultTime, [Validators.required,
        // TriggerTimeValidator()
      ]],
      timeZone: ["",Validators.required],
      countryCodes: ["",Validators.required],
      importFile: [null],
      importCSVFile : [null],
    });

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
    console.log(this.timeZonesListArr.filter(timeZone => timeZone.text.toLowerCase().includes(filterValue)));
    return this.timeZonesListArr.filter(timeZone => timeZone.text.toLowerCase().includes(filterValue));
  }


  displayFn(SelectedId){
    if(!SelectedId) return '';
    let index = this.timeZonesListArr.findIndex(timeZone => timeZone.utc === SelectedId);
    this.configure(this.timeZonesListArr[index]);
    return this.timeZonesListArr[index].text;

  }

  configure(timeZone : any){

    this.form.controls['triggerTime'].setValue(this.defaultTime) //For Setting Time Zone as Null

    if(timeZone){
      this.fromBlockTime = timeZone['blockedFrom'] ? timeZone['blockedFrom'] : null;
      this.toBlockTime = timeZone['blockedTo'] ? timeZone['blockedTo'] : null;
      this.timeZoneText = timeZone['text'] ? timeZone['text'] : '';
      this.configurable(this.fromBlockTime,this.toBlockTime);
    }
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
          String(this.userService.currentUserValue.userId),this.fileUploadFlag,this.documentUploadId,this.csvdocumentUploadId,timeZones,countryCodes
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
              this.labelImportCSV.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE;
              this.documentUploadId = null;
              this.csvdocumentUploadId = null;
              this.disableTemplateFlag = false;
              this.errorCountArray = [];
              this.loading = false;
              this.fileToUpload = null
              this.csvfileFlag = false;
              this.csvfileToUpload = false;
              this.pdfFileToUploadFlag  =false;
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

  onFileChange(files: FileList,type : any) {
    if(type === 'PDF'){
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map((f) => f.name)
      .join(", ");
      this.pdfFileToUploadFlag = true
      console.log("PDF Label");
    }else if(type === "CSV"){
      this.labelImportCSV.nativeElement.innerText = Array.from(files)
      .map((f) => f.name)
      .join(", ");
      console.log("CSV Label");

    }
    this.fileToUpload = files.item(0);
    if(this.fileToUpload){
      console.log("FiletoUpload"+this.fileToUpload);
    const userId = String(this.userService.currentUserValue.userId);
    const modifiedFile = Object.defineProperty(this.fileToUpload, "name", {
      writable: true,
      value: this.fileToUpload["name"]
    });
    modifiedFile["name"] = userId + "-" + new Date().getTime() + "-" + modifiedFile["name"];
    console.log(modifiedFile);
    this.uploadToAppiyoDrive(modifiedFile,type);
    }
    
  }

  cancelFileUpload()
  {
   // this.form.setValue({importFile : ''});
    this.form.controls['importFile'].reset();
    this.fileToUpload = null;
    this.fileUploadFlag = false
    this.documentUploadId = null;
    this.pdfFileToUploadFlag = false
    this.labelImport.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE;
  }

  cancelCSVFileUpload(){
    this.form.controls['importCSVFile'].reset();
    this.csvfileToUpload = false;
    this.csvdocumentUploadId = null;
    this.disableTemplateFlag = false
    this.labelImportCSV.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE;
    this.csvfileFlag = false;
    this.errorCountArray = [];
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

  uploadToAppiyoDrive(file : any,flag : string)
  {
    this.userService.uploadToAppiyoDrive(file).subscribe(
      (response) =>
      {
        console.log("Response from upload drive"+response)
        if(response["ok"])
        {
          
          this.setUploadId(response,flag);
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

  setUploadId(response : any,flag : string){
    if(flag === 'PDF'){
      this.documentUploadId = response["info"]["id"]; //FOR PDF
    }

          if(flag === 'CSV'){
          this.csvdocumentUploadId = response["info"]["id"]; //FOR CSV
          this.disableTemplateFlag = true;
          }
  }

  configurable(fromBlockTime : any,toBlockTime :  any){
    let FromBlockTimeArr = fromBlockTime ? fromBlockTime.split(":") : null
    let ToBlockTimeArr =  toBlockTime ?  toBlockTime.split(":") : null;
 
    this.FromBlockTimeHour  = FromBlockTimeArr ? Number(FromBlockTimeArr[0]) : 0;
    this.FromBlockTimeMinute  = FromBlockTimeArr ? Number(FromBlockTimeArr[1]) : 0;

    this.ToBlockTimeHour = ToBlockTimeArr ? Number(ToBlockTimeArr[0]) : 0;
    this.ToBlockTimeMinute = ToBlockTimeArr ? Number(ToBlockTimeArr[1]) : 0;
   }

   triggerTimeValidator(){
     const fieldControls = this.form.controls["triggerTime"].value;
     if(fieldControls){
      const validateHour : number = fieldControls.hour ? Number(fieldControls.hour) : 0;
      const validateMinute : number = fieldControls.minute ? Number(fieldControls.minute) : 0;
 
      if(validateHour > this.FromBlockTimeHour || validateHour < this.ToBlockTimeHour){
         this.warningPopUp();
      }
      else if(validateHour == this.FromBlockTimeHour || validateHour == this.ToBlockTimeHour){
        if(validateHour == this.FromBlockTimeHour && validateMinute >= this.FromBlockTimeMinute){
         this.warningPopUp();
         }
        if(validateHour == this.ToBlockTimeHour && validateMinute <= this.ToBlockTimeMinute)
        {
         this.warningPopUp();
        }
      }
     }
    
   }


   warningPopUp(){
    const dialogRef = this.warningDialog.open(WarningDialogBoxComponent,{
      width : '500px',
      data : {fromTime:this.fromBlockTime,toTime:this.toBlockTime,timeZoneText : this.timeZoneText}
    })
    dialogRef.afterClosed().subscribe((result) =>{
      if(result){
        return;
      }
    })
   }

 
   // input change listener for the CSV File
   fileChangeListener($event: any): void {
     const files : FileList= $event.srcElement.files;
     this.labelImportCSV.nativeElement.innerText = Array.from(files)
      .map((f) => f.name)
      .join(", ");
     this.csvfileToUpload = true;
    const arr : any[] = this.validatorMethod();
     // Select the files from the event
     
  
     // Parse the file you want to select for the operation along with the configuration
     this.ngxCsvParser.parse(files[0], { header: false, delimiter: ',' })
       .pipe().subscribe((result: Array<any>) => {
  
         console.log('Result', result);

         let fileHeaderArray : any[] = result ? (result[0] ? result[0] : null) : null;

         if(!fileHeaderArray.includes("phoneNumber")){

           this.errorCountArray.push("phoneNumber");
           console.log("Mobile Mandatory check")
         }
         if(!(!arr.some(ele => !fileHeaderArray.includes(ele)))){
              this.codeLineParser(arr,fileHeaderArray);
         }

         if(this.errorCountArray.length > 0){
         this.stringErrorArray =  this.errorMessageConstructor(this.errorCountArray);
         this.csvfileFlag = true;
         return
         }
          console.log("file validation condtions bypassed")
          this.onFileChange(files,'CSV')
         this.csvRecords = result;
       }, (error: NgxCSVParserError) => {
         console.log('Error', error);
       });
  
   }


   errorMessageConstructor(errorCountArray : string[]) : string{
     let stringArray : string  = '';
     if(errorCountArray.length > 0){
          for(let i =0 ;i < errorCountArray.length ; i++){
            if(i != errorCountArray.length-1){
            stringArray = stringArray+errorCountArray[i]+ ",";
            }else{
              stringArray = stringArray+errorCountArray[i];
            }

          }
     }
     console.log("Error Msg Constructor :"+stringArray);
     return stringArray;
   }

   //File read error message constructor
    codeLineParser(arrayA : string[],arrayB : string[]){
      for(let i =0 ; i < arrayA.length ;i++){
            if(!arrayB.includes(arrayA[i])){
              this.errorCountArray.push(arrayA[i]);
            }
            
      }
      console.log("Code Line Parser ")
    }



   templateParser(){
     const templteMessage = this.form.controls['template'].value;
     const result = templteMessage.match(/{([^}]+)}/g)
                    .map(res => res.replace(/{|}/g , ''))
   }

   validatorMethod(): any{
    var found = [],          // an array to collect the strings that are found
    rxp = /{([^}]+)}/g,
    templteMessage = this.form.controls['template'].value,
    // str = "a {string} with {curly} braces",
    
    curMatch;

  while( curMatch = rxp.exec( templteMessage ) ) {
    found.push( curMatch[1] );
}

console.log( found );
return found    // ["string", "curly"]
   }



   //Getting Block time

   

  
}
