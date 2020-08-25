import { Component, OnInit ,ViewChild,ElementRef } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";

@Component({
  selector: "app-promotional-template",
  templateUrl: "./promotional-template.component.html",
  styleUrls: ["./promotional-template.component.scss"],
})
export class PromotionalTemplateComponent implements OnInit {

  @ViewChild("labelImport") labelImport: ElementRef;

  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  form: FormGroup;

  loading = false;
  fileToUpload: any;
  fileUploadFlag : boolean;
  documentUploadId : any;


  defaultTime = { hour: 12, minute: 0 };

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService
  ) {
    this.form = this.formBuilder.group({
      templateId: [null, Validators.required],
      template: [null, Validators.required],
      campaignDate: [new Date(), Validators.required],
      triggerTime: [this.defaultTime, Validators.required],
      importFile: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const fieldControls = this.form.controls;

    const campaignDate = fieldControls.campaignDate.value;
    const triggerTime = fieldControls.triggerTime.value;

    // tslint:disable-next-line: max-line-length
    const formattedDate = `${campaignDate.year}-${campaignDate.month}-${campaignDate.day}`;
    this.fileUploadFlag = fieldControls.importFile.value ? true : false;


    this.loading = true;
    this.userService
      .createPromotionalTemplate(
        fieldControls.templateId.value,
        fieldControls.template.value,
        formattedDate,
        `${triggerTime.hour}:${triggerTime.minute}:00`,
        String(this.userService.currentUserValue.userId),this.fileUploadFlag,this.documentUploadId
      )
      .subscribe(
        (createdPromotionalMessage) => {
          const {
            ProcessVariables: { status },
            ProcessVariables: { message = {} },
          } = createdPromotionalMessage;
          if (status) {
            this.toasterService.showSuccess(
              TOASTER_MESSAGES.CREATE_PROMOTIONAL_TEMPLATE_SUCCESS
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

  onFileChange(files: FileList) {
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
