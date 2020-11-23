import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  BUTTON_TEXTS,
  TOASTER_MESSAGES,
  RESPONSES,
  SMSTEXT
} from "src/app/shared/utils/constant";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-block-whatsapp-dialog",
  templateUrl: "./block-whatsapp-dialog.component.html",
  styleUrls: ["./block-whatsapp-dialog.component.scss"],
})
export class BlockWhatsappDialogComponent implements OnInit {
  @Input() inputData: {
    action: string;
    cTime: string;
    channel: string;
    mobile: string;
  };

  blockButtonText = BUTTON_TEXTS.BLOCK_BUTTON_TEXT;
  cancelButtonText = BUTTON_TEXTS.CANCEL_BUTTON_TEXT;
  smsMsgText = SMSTEXT.smsMsgText;

  form: FormGroup;

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private ngbActiveModal: NgbActiveModal,
    private userService: UserService,
    private toasterService: ToasterService
  ) {
    this.form = this.formBuilder.group({
      srNumber: [null, Validators.required],
      reason: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  blockWhatsapp(): void {
    this.loading = true;
    const fieldControls = this.form.controls;

    const srNumber = fieldControls.srNumber.value;
    const reason = fieldControls.reason.value;

    this.userService
      .blockUserWhatsappAccesss(
        srNumber,
        reason,
        this.userService.currentUserValue.userId,
        this.inputData.action,
        this.inputData.cTime,
        this.inputData.channel,
        this.inputData.mobile
      )
      .subscribe(
        (response) => {
          const {
            ProcessVariables: { status, message = {} },
          } = response;
          if (status) {
            this.toasterService.showSuccess(
              `${this.inputData.mobile} ${TOASTER_MESSAGES.BLOCK_WHASTAPP_SUCCESS}`
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

  // sendSms(){
  //   this.inputData.mobile;
  //   this.smsMsgText
  //   this.userService.sendSmsMessageForBlocked(this.inputData.mobile,this.smsMsgText).subscribe((response) => {
  //     console.log(response);

  //   })
  // }
}
