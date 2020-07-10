import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { BUTTON_TEXTS } from "src/app/shared/utils/constant";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-promotional-template",
  templateUrl: "./promotional-template.component.html",
  styleUrls: ["./promotional-template.component.scss"],
})
export class PromotionalTemplateComponent implements OnInit {
  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  parameterMappingOptions = ["P1", "P2", "P3", "P4"];
  messages = ["Message 1", "Message 2"];

  selectedParameters = [];

  form: FormGroup;

  loading = false;

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;

  defaultTime = { hour: 12, minute: 0 };

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      messageId: [null, Validators.required],
      preview: [null, Validators.required],
      parameterMapping: [null, Validators.required],
      noOfDynamicParameters: [null, Validators.required],
      campaignStartDate: [new Date(), Validators.required],
      campaignEndDate: [null, Validators.required],
      triggerTime: [this.defaultTime, Validators.required],
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

  onChange(event: any, option: any): void {
    const isChecked = event.target.checked;
    const selectedItem = option;
    if (isChecked) {
      this.selectedParameters.push(selectedItem);
    } else {
      const index = this.selectedParameters.findIndex(
        (menu) => menu.title === option.title
      );
      this.selectedParameters.splice(index, 1);
    }
  }

  onSubmit() {
    const fieldControls = this.form.controls;

    const preview = fieldControls.preview.value;
    const noOfDynamicParameters = fieldControls.noOfDynamicParameters.value;
    const campaignStartDate = fieldControls.campaignStartDate.value;
    const triggerTime = fieldControls.triggerTime.value;
    const campaignEndDate = fieldControls.campaignEndDate.value;
    const customerBase = fieldControls.customerBase.value;

    const dataTobeSaved = [
      preview,
      noOfDynamicParameters,
      campaignStartDate,
      triggerTime,
      campaignEndDate,
      customerBase,
    ];

    console.log(dataTobeSaved);
    // alert(`Entered Data -->${dataTobeSaved}`);
  }
}
