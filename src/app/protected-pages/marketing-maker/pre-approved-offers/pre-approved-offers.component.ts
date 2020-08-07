import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";

@Component({
  selector: "app-pre-approved-offers",
  templateUrl: "./pre-approved-offers.component.html",
  styleUrls: ["./pre-approved-offers.component.scss"],
})
export class PreApprovedOffersComponent implements OnInit {
  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  form: FormGroup;

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;

  loading = false;

  defaultTime = { hour: 12, minute: 0 };

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService
  ) {
    this.form = this.formBuilder.group({
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
    this.fromMinDate = {
      year: 0,
      month: 0,
      day: 0,
    };

    this.toMinDate = {
      year: 0,
      month: 0,
      day: 0,
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

      // tslint:disable-next-line: max-line-length
      const transformedStartDate = `${campaignStartDate.year}-${campaignStartDate.month}-${campaignStartDate.day}`;
      const transformedEndDate = `${campaignEndDate.year}-${campaignEndDate.month}-${campaignEndDate.day}`;
      this.userService
        .createPreapprovedOffer(
          transformedStartDate,
          transformedEndDate,
          `${triggerTime.hour}:${triggerTime.minute}:00`,
          String(this.userService.currentUserValue.userId)
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
  }
}
