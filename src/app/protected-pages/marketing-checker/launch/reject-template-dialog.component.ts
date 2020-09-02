import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  BUTTON_TEXTS,
  TOASTER_MESSAGES,
  TEMPLATE_STATUS_CODES,
  RESPONSES,
} from "src/app/shared/utils/constant";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";

@Component({
  selector: "app-reject-template-dialog",
  templateUrl: "./reject-template-dialog.component.html",
  styleUrls: ["./reject-template-dialog.component.scss"],
})
export class RejectTemplateDialogComponent implements OnInit {
  @Input() inputData: any;
  rejectButtonText = BUTTON_TEXTS.REJECT_BUTTON_TEXT;
  cancelButtonText = BUTTON_TEXTS.CANCEL_BUTTON_TEXT;

  form: FormGroup;
  loading = false;

  constructor(
    private userService: UserService,
    private toasterService: ToasterService,
    private ngbActiveModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      reason: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  rejectTemplate() {
    this.loading = true;
    this.userService
      .updateTemplate(
        String(this.userService.currentUserValue.userId),
        TEMPLATE_STATUS_CODES.REJECTED,
        this.inputData.id,null,
        this.form.value.reason
      )
      .subscribe(
        (updatedTemplate) => {
          const {
            ProcessVariables: { status },
            ProcessVariables: { message = {} },
          } = updatedTemplate;
          if (status) {
            this.toasterService.showSuccess(
              TOASTER_MESSAGES.REJECT_TEMPLATE_SUCCESS
            );
            this.close(RESPONSES.SUCCESS);
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

  close(message?: string): void {
    this.ngbActiveModal.close(message);
  }
}
