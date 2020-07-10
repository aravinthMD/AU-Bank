import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BUTTON_TEXTS } from "src/app/shared/utils/constant";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

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

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;

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

  ngOnInit(): void {
    this.setValidators();
  }

  setValidators(): void {
    const date = new Date();
    this.fromMinDate = { year: 0, month: 0, day: 0 };

    this.fromMaxDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };

    this.toMinDate = { year: 0, month: 0, day: 0 };

    this.toMaxDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
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
