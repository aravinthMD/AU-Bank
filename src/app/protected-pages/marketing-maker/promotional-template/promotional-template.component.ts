import { Component, OnInit } from "@angular/core";
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
  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  form: FormGroup;

  loading = false;

  defaultTime = { hour: 12, minute: 0 };

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService
  ) {
    this.form = this.formBuilder.group({
      templateId: [null, Validators.required],
      campaignDate: [new Date(), Validators.required],
      triggerTime: [this.defaultTime, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const fieldControls = this.form.controls;

    const campaignDate = fieldControls.campaignDate.value;
    const triggerTime = fieldControls.triggerTime.value;

    // tslint:disable-next-line: max-line-length
    const formattedDate = `${campaignDate.year}-${campaignDate.month}-${campaignDate.day}`;

    this.loading = true;
    this.userService
      .createPromotionalTemplate(
        fieldControls.templateId.value,
        formattedDate,
        `${triggerTime.hour}:${triggerTime.minute}:00`,
        String(this.userService.currentUserValue.userId)
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
