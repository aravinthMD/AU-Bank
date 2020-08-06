import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {
  BUTTON_TEXTS,
  TOASTER_MESSAGES,
  TEMPLATE_STATUS_CODES,
  RESPONSES,
} from "src/app/shared/utils/constant";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";

@Component({
  selector: "app-approve-template-dialog",
  templateUrl: "./approve-template-dialog.component.html",
  styleUrls: ["./approve-template-dialog.component.scss"],
})
export class ApproveTemplateDialogComponent implements OnInit {
  @Input() inputData: any;

  launchButtonText = BUTTON_TEXTS.LAUNCH_BUTTON_TEXT;
  rejectButtonText = BUTTON_TEXTS.REJECT_BUTTON_TEXT;
  loading = false;

  constructor(
    private userService: UserService,
    private toasterService: ToasterService,
    private ngbActiveModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    console.log(this.inputData);
  }

  approveTemplate() {
    this.loading = true;
    this.userService
      .updateTemplate(
        String(this.userService.currentUserValue.userId),
        TEMPLATE_STATUS_CODES.APPROVED,
        this.inputData.id
      )
      .subscribe(
        (updatedTemplate) => {
          const {
            ProcessVariables: { status },
            ProcessVariables: { message = {} },
          } = updatedTemplate;
          if (status) {
            this.toasterService.showSuccess(
              TOASTER_MESSAGES.APPROVE_TEMPLATE_SUCCESS
            );
            this.loading = false;
            this.close(RESPONSES.SUCCESS);
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
