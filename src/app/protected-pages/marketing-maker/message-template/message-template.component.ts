import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators ,AbstractControl } from "@angular/forms";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";

@Component({
  selector: "app-message-template",
  templateUrl: "./message-template.component.html",
  styleUrls: ["./message-template.component.scss"],
})
export class MessageTemplateComponent implements OnInit {

  @ViewChild("labelImport") labelImport: ElementRef;

  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  form: FormGroup;

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;

  loading = false;
  fileToUpload: any;
  fileUploadFlag : boolean;
  documentUploadId : any;
  defaultTime = { hour: 12, minute: 0 };

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService,
  ) {
    this.form = this.formBuilder.group({
      template: [null, Validators.required],
      campaignStartDate: [new Date(), Validators.required],
      campaignEndDate: [null, Validators.required],
      triggerTime: [this.defaultTime, Validators.required],
      importFile: [null],
    });
  }

  ngOnInit(): void {
    this.setValidators();

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
      this.fileUploadFlag = fieldControls.importFile.value ? true : false;

      // tslint:disable-next-line: max-line-length
      const transformedStartDate = `${campaignStartDate.year}-${campaignStartDate.month}-${campaignStartDate.day}`;
      const transformedEndDate = `${campaignEndDate.year}-${campaignEndDate.month}-${campaignEndDate.day}`;
      this.userService
        .createMessageTemplate(
          fieldControls.template.value,
          transformedStartDate,
          transformedEndDate,
          `${triggerTime.hour}:${triggerTime.minute}:00`,
          String(this.userService.currentUserValue.userId),this.fileUploadFlag,this.documentUploadId
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
    console.log("FiletoUpload"+this.fileToUpload);
    const userId = String(this.userService.currentUserValue.userId);
    const modifiedFile = Object.defineProperty(this.fileToUpload, "name", {
      writable: true,
      value: this.fileToUpload["name"]
    });
    modifiedFile["name"] = userId + "-" + new Date().getTime() + "-" + modifiedFile["name"];
    console.log(modifiedFile);
    this.uploadToAppiyoDrive(modifiedFile);
  }

  cancelFileUpload()
  {
   // this.form.setValue({importFile : ''});
    this.form.controls['importFile'].reset();
    this.fileToUpload = null;
    this.fileUploadFlag = false
    this.documentUploadId = null;
    this.labelImport.nativeElement.innerText = TOASTER_MESSAGES.LABLE_MESSAGE;
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
