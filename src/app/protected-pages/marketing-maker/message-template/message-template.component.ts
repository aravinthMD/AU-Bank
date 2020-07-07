import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BUTTON_TEXTS } from "src/app/shared/utils/constant";

@Component({
  selector: "app-message-template",
  templateUrl: "./message-template.component.html",
  styleUrls: ["./message-template.component.scss"],
})
export class MessageTemplateComponent implements OnInit {
  @ViewChild("labelImport") labelImport: ElementRef;

  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;
  customerBaseoptions = ["Excel based", "Pdf based"];

  form: FormGroup;
  fileToUpload: File = null;

  loading = false;

  defaultTime = { hour: 12, minute: 0 };

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      template: [null, Validators.required],
      noOfDynamicParameters: [null, Validators.required],
      campaignStartDate: [new Date(), Validators.required],
      campaignEndDate: [null, Validators.required],
      triggerTime: [this.defaultTime, Validators.required],
      customerBase: ["Excel based", Validators.required],
      importFile: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map((f) => f.name)
      .join(", ");
    this.fileToUpload = files.item(0);
  }

  onSubmit() {
    const fieldControls = this.form.controls;

    const template = fieldControls.template.value;
    const noOfDynamicParameters = fieldControls.noOfDynamicParameters.value;
    const campaignStartDate = fieldControls.campaignStartDate.value;
    const triggerTime = fieldControls.triggerTime.value;
    const campaignEndDate = fieldControls.campaignEndDate.value;
    const customerBase = fieldControls.customerBase.value;
    const selectedFile = this.fileToUpload;

    const dataTobeSaved = [
      template,
      noOfDynamicParameters,
      campaignStartDate,
      triggerTime,
      campaignEndDate,
      customerBase,
      selectedFile,
    ];

    console.log(dataTobeSaved);
    // alert(`Entered Data -->${dataTobeSaved}`);
  }
}
