import { Component, OnInit ,ViewChild,ElementRef,Input} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { TriggerTimeValidator} from "src/app/shared/validators/TriggerTimeValidator";
import timeZones from 'src/app/shared/JsonFiles/timeZone.json'
import countryCodes from 'src/app/shared/JsonFiles/countryCodes.json';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { error } from 'protractor';
import {MatDialog} from '@angular/material/dialog';
import { WarningDialogBoxComponent } from '../warning-dialog-box/warning-dialog-box.component';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';


@Component({
  selector: "app-pre-approved-offers",
  templateUrl: "./pre-approved-offers.component.html",
  styleUrls: ["./pre-approved-offers.component.scss"],
})
export class PreApprovedOffersComponent implements OnInit {
  @ViewChild("labelImport") labelImport: ElementRef;
  // @Input('BlockedFrom') fromBlockTime : any;
  // @Input('BlockedTo') toBlockTime : any;
  @Input('timeZonesList') timeZonesListArr : any[];
  @ViewChild("labelImportCSV") labelImportCSV : ElementRef;
  


  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  form: FormGroup;

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;
  errorCountArray : string[]  = [];


  FromBlockTimeHour : any;
  FromBlockTimeMinute : any;
  ToBlockTimeHour : any;
  ToBlockTimeMinute : any;

  loading = false;

  dropdownSettings = {};

  timeZones:any = timeZones;
  countryCodeList:any = countryCodes;
  filteredOptions: Observable<string[]>;

  defaultTime = { hour: 12, minute: 0 };
  templateDropDown : any[] = [];
  showTemplateMessageFlag : boolean;
  fileToUpload: any;
  onlyPdf:boolean = false;
  documentUploadId : any;
  fileUploadFlag : boolean;


  fromBlockTime : any;
  toBlockTime :  any;
  timeZoneText : string;
  stringErrorArray : string;
  csvfileFlag:boolean = false
  csvRecords : any[];
  csvdocumentUploadId : any;
  disableTemplateFlag : boolean;
  pdfFileToUploadFlag : boolean;





  csvfileToUpload : boolean;

  selectedItems = [];


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService,
    private warningDialog : MatDialog,
    private ngxCsvParser : NgxCsvParser
  ) {
    this.form = this.formBuilder.group({
      templateId : [null],
      template : [null],
      timeZone: ["",Validators.required],
      countryCodes: ["",Validators.required],
      campaignStartDate: [new Date(), Validators.required],
      campaignEndDate: [null, Validators.required],
      triggerTime: [this.defaultTime, [Validators.required,
        // TriggerTimeValidator()
      ]],
      importFile: [null],
      importCSVFile : [null],
    });
  }

  ngOnInit(): void {
    this.setValidators();
    this.fetchPreApprovedOffersDropDown();

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

    return this.timeZonesListArr.filter(timeZone => timeZone.text.toLowerCase().includes(filterValue));
  }

  displayFn(SelectedId){
    if(!SelectedId) return '';
    let index = this.timeZonesListArr.findIndex(timeZone => timeZone.utc === SelectedId);
    this.configure(this.timeZonesListArr[index]);
    return this.timeZonesListArr[index].text;

  }

  configure(timeZone : any){

    this.form.controls['triggerTime'].setValue(this.defaultTime); //For Setting Time Zone as Null

    if(timeZone){
      this.fromBlockTime = timeZone['blockedFrom'] ? timeZone['blockedFrom'] : null;
      this.toBlockTime = timeZone['blockedTo'] ? timeZone['blockedTo'] : null;
      this.timeZoneText = timeZone['text'] ? timeZone['text'] : '';
      this.configurable(this.fromBlockTime,this.toBlockTime);
    }
  }

  setValidators(): void {
    const date = new Date();
    // this.fromMinDate = {
    //   year: 0,
    //   month: 0,
    //   day: 0,
    // };
    console.log("Date"+date.getDate()+" "+date.getFullYear()+" "+date.getMonth())
    this.fromMinDate = {
      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDate(),
    };
    this.toMinDate = {
      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDate(),
    };

    // this.toMinDate = {
    //   year: 0,
    //   month: 0,
    //   day: 0,
    // };
  }

  onFromDateChange(event: NgbDate): void {
    const { year, month, day } = event;
    this.toMinDate = { year, month, day };
  }

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
      const timeZones = fieldControls.timeZone.value;
      const countryCodes = fieldControls.countryCodes.value;
      const templateObj = fieldControls.templateId.value ? fieldControls.templateId.value : "";
      const templateId = templateObj ? templateObj.templateId : ""; 
      const template = fieldControls.template.value ? fieldControls.template.value : "";
      this.fileUploadFlag = fieldControls.importFile.value ? true : false;

      // tslint:disable-next-line: max-line-length
      const transformedStartDate = `${campaignStartDate.year}-${campaignStartDate.month}-${campaignStartDate.day}`;
      const transformedEndDate = `${campaignEndDate.year}-${campaignEndDate.month}-${campaignEndDate.day}`;
      this.userService
        .createPreapprovedOffer(
          templateId,
          template,
          transformedStartDate,
          transformedEndDate,
          `${triggerTime.hour}:${triggerTime.minute}:00`,
          String(this.userService.currentUserValue.userId),this.fileUploadFlag,this.documentUploadId,this.csvdocumentUploadId,timeZones,countryCodes
        )
        .subscribe(
          (createdOffer) => {
            const {
              ProcessVariables: { status },
              ProcessVariables: { message = {} },
            } = createdOffer;
            if (status) {
              this.toasterService.showSuccess(
                TOASTER_MESSAGES.CREATE_PREAPPROVED_OFFER_SUCCESS
              );
              this.form.reset();
              this.form.controls['timeZone'].patchValue('');
              this.selectedItems = [];
              // this.labelImport.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE; //Commented for Testing
              // this.labelImportCSV.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE; //Commented for Changes
              this.documentUploadId = null;
              this.csvdocumentUploadId = null;
              this.showTemplateMessageFlag = false;
              this.loading = false;
              this.fileToUpload = null
              this.pdfFileToUploadFlag  =false;
              this.csvfileToUpload = false;
              this.csvfileFlag = false;
              this.errorCountArray = [];
              
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

  onTemplateIdChange()
  {
    if(this.form.controls['templateId'].value){
      const templateObj = this.form.controls['templateId'].value;
      const templateId = templateObj ? templateObj.message : null;
      this.form.controls['template'].setValue(templateId ? templateId : "");
      this.showTemplateMessageFlag = true;
    }
    
  }

  fetchPreApprovedOffersDropDown()
  {
    this.userService.getPreApprovedOffersDropDownData().subscribe((response) =>{
      this.templateDropDown = response.ProcessVariables.templateIdList;
      console.log(this.templateDropDown);
    },
    (error) => {
      this.toasterService.showError(TOASTER_MESSAGES.DROP_DOWN_FAILURE);
      console.log(error);
    });
  }

  onFileChange(files: FileList,type :  any) {
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
      this.onlyPdf = false;
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

  cancelCSVFileUpload(){
    this.form.controls['importCSVFile'].reset();
    this.csvfileToUpload = false;
    this.csvdocumentUploadId = null;
    // this.disableTemplateFlag = false
    this.labelImportCSV.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE;
    this.csvfileFlag = false;
    this.errorCountArray = [];
  }


  fileChangeListener($event :  any) : void {
    const files : FileList = $event.srcElement.files;
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

  uploadToAppiyoDrive(file : any,flag : string)
  {
    this.userService.uploadToAppiyoDrive(file).subscribe(
      (response) =>
      {
        console.log(response)
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


  cancelFileUpload()
  {
   // this.form.setValue({importFile : ''});
    this.form.controls['importFile'].reset();
    this.fileToUpload = null;
    this.fileUploadFlag = false
    this.documentUploadId = null;
    this.pdfFileToUploadFlag = false;
    this.labelImport.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE;
    // this.onlyPdf = false;
  }

  configurable(fromBlockTime :  any,toBlockTime :  any){
    let FromBlockTimeArr = fromBlockTime ? fromBlockTime.split(":") : null
    let ToBlockTimeArr = toBlockTime ? toBlockTime.split(":") : null;
 
    this.FromBlockTimeHour = FromBlockTimeArr ? Number(FromBlockTimeArr[0]) : 0;
    this.FromBlockTimeMinute  = FromBlockTimeArr ? Number(FromBlockTimeArr[1]) : 0;

    this.ToBlockTimeHour = ToBlockTimeArr ? Number(ToBlockTimeArr[0]) : 0;
    this.ToBlockTimeMinute = ToBlockTimeArr ? Number(ToBlockTimeArr[1]) : 0;
   }

   triggerTimeValidator(){
    const fieldControls = this.form.controls["triggerTime"].value;
    if(fieldControls){
      const validateHour : number = fieldControls.hour ? Number(fieldControls.hour) : null;
      const validateMinute : number= fieldControls.minute ? Number(fieldControls.minute) : null;
  
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

     //File read error message constructor
     codeLineParser(arrayA : string[],arrayB : string[]){
      for(let i =0 ; i < arrayA.length ;i++){
            if(!arrayB.includes(arrayA[i])){
              this.errorCountArray.push(arrayA[i]);
            }
            
      }
      console.log("Code Line Parser ")
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



}
