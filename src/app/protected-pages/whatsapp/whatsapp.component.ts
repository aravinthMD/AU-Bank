import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  BUTTON_TEXTS,
  PAGES,
  TOASTER_MESSAGES,
  RESPONSES,
} from "src/app/shared/utils/constant";
import { Router } from "@angular/router";
import { NgbDate, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BlockWhatsappDialogComponent } from "./block-whatsapp-dialog.component";
import { ReferenceService } from "src/app/shared/services/reference.service";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { saveAs } from "file-saver";
import COUNTRY_CODE_CONSTANTS from 'src/app/shared/JsonFiles/countryCodes.json'
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: "app-whatsapp",
  templateUrl: "./whatsapp.component.html",
  styleUrls: ["./whatsapp.component.scss"],
})
export class WhatsappComponent implements OnInit {
  blockButtonText = BUTTON_TEXTS.BLOCK_BUTTON_TEXT;
  downloadButtonText = BUTTON_TEXTS.DOWNLOAD_BUTTON_TEXT;

  // filterOptions = ["ALL","BLOCKED","UNBLOCKED"];
  filterOptions = [{name:"ALL",value:"0"},{name:"BLOCKED",value:"1"},{name:"UNBLOCKED",value:"2"}]
  tableHeaders: string[] = [];

  countryCodes = new FormControl();
  countryCodeList : any[] = COUNTRY_CODE_CONSTANTS;
  filteredOptions: Observable<string[]>;


  isViewOnly = false;

  form: FormGroup;
  userDetail: any;

  searchLoading = false;
  reportLoading = false;
  validSearch = false;
  Local:any;

  today = new Date();

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;

  from:number;
  downLoadContentConcat:string = "";
  fromIncValue:number;
  val:boolean = true;
  downLoadCompleteFlag:boolean = false;


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
      filterType: [this.filterOptions[0].value, Validators.required],
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

  ngOnInit(): void {
    this.filteredOptions = this.countryCodes.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
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

  
    
  

  private _filter(value : string){

    const filterValue = value ? value.toLowerCase(): "";
    return this.countryCodeList.filter(cntCode => cntCode.name.toLowerCase().includes(filterValue) | cntCode.dial_code.toLowerCase().includes(filterValue));
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
    const CountryCode = this.countryCodes.value;
    if (this.validSearch && CountryCode) {
      const CountryCodeFormatted = CountryCode.substring(1);
      const MobileNoWithCntCode = `${CountryCodeFormatted}${value}`
      this.fetchUserByMobileNumber(MobileNoWithCntCode);
    } else {
      this.userDetail = null;
    }
  }

  fetchUserByMobileNumber(mobileNumber: string): void {
    this.searchLoading = true;
    this.userService.fetchUserByMobileNumber(mobileNumber).subscribe(
      (response) => {
        const {
          ProcessVariables: { status },
        } = response;
        if (status) {
          const {
            ProcessVariables: { blockLog },
          } = response;
          const [data] = blockLog;
          this.userDetail = data;
          this.searchLoading = false;
        } else {
          this.toasterService.showError(TOASTER_MESSAGES.USER_NOT_FOUND);
          this.searchLoading = false;
        }
      },
      (error) => {
        this.searchLoading = false;
        this.toasterService.showError(error);
      }
    );
  }

  get fieldControls() {
    return this.form.controls;
  }

  // downLoadFetchReport(){
  //   debugger;
  //   this.downLoadContentConcat = ""
  //   this.downloadReport();
  //   if(this.downLoadCompleteFlag)
  //   this.saveFile(this.downLoadContentConcat);
  // }

   convert(d) {
    var date = new Date(d),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  downloadReport(fromVal ?: number): void {
    this.reportLoading = true;
    const fromDate = this.fieldControls.fromDate.value;
    const toDate = this.fieldControls.toDate.value;
    const filterType = this.fieldControls.filterType.value;
    // const formattedFromDate = `${fromDate.year}-${fromDate.month}-${fromDate.day}`;
    // const formattedToDate = `${toDate.year}-${toDate.month}-${toDate.day}`;
    const formattedFromDate= `${fromDate.month}/${fromDate.day}/${fromDate.year}`+" 00:00:00";
    const formattedToDate = `${toDate.month}/${toDate.day}/${toDate.year}`+" 23:59:59"
    const ISOformattedFromDate = new Date(formattedFromDate).toISOString();
    const ISOformattedToDate = new Date(formattedToDate).toISOString();
    this.userService
      .downloadReport(
        this.userDetail ? this.userDetail.mobile : -1,
        ISOformattedFromDate,
        ISOformattedToDate,
        filterType,
        true,fromVal
      )
      .subscribe(
        (response) => {
          const {
            ProcessVariables: { status, message = {},more },
          } = response;
          if (status) {
            const {
              ProcessVariables: { downloadContent },
            } = response;

            this.downLoadContentConcat = this.downLoadContentConcat.concat(downloadContent);
            console.log("Document Data:"+this.downLoadContentConcat);
            this.reportLoading = false;

              if(more)
              {
                this.fromIncValue = fromVal + 25;
                this.downloadReport(this.fromIncValue);
              }
              if(!more)
              {
              this.saveFile(this.downLoadContentConcat);
              this.toasterService.showSuccess(
                TOASTER_MESSAGES.REPORT_DOWNLOAD_SUCCESS
              );
              this.downLoadContentConcat = ''; 
              }
              // if(!this.val){
              // this.saveFile(this.downLoadContentConcat);
              // this.downLoadContentConcat = null;
              // }
          } else {
            this.toasterService.showError(message.value);
            this.reportLoading = false;
          }
        },
        (error) => {
          this.reportLoading = false;
          this.toasterService.showError(error);
        }
      );
  }

  transform(response, remaining: number, sent: number) {
    console.log(remaining);
    // let contentToDownload: string;
    // const savedData = sessionStorage.getItem("contentToDownload");

    // if (remaining > 0) {
    //   for (let i = 0; i < remaining; i++) {
    //     if (savedData) {
    //       contentToDownload = savedData.concat(response);
    //       sessionStorage.setItem("contentToDownload", contentToDownload);
    //     } else {
    //       contentToDownload = response;
    //       sessionStorage.setItem("contentToDownload", contentToDownload);
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
    sessionStorage.removeItem("contentToDownload");
  }

  openBlockWhatsappDialog({ action, cTime, channel, mobile }): void {
    const dialog = this.ngbDialog.open(BlockWhatsappDialogComponent, {
      centered: true,
    });
    dialog.componentInstance.inputData = { action, cTime, channel, mobile };
    dialog.result.then((response) => {
      if (response === RESPONSES.SUCCESS) {
        this.fetchUserByMobileNumber(mobile);
      }
    });
  }
}
