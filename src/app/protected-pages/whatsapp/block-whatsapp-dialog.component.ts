import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BUTTON_TEXTS } from "src/app/shared/utils/constant";

@Component({
  selector: "app-block-whatsapp-dialog",
  templateUrl: "./block-whatsapp-dialog.component.html",
  styleUrls: ["./block-whatsapp-dialog.component.scss"],
})
export class BlockWhatsappDialogComponent implements OnInit {
  @Input() userName: string;
  @Input() mobileNumber: string;

  blockButtonText = BUTTON_TEXTS.BLOCK_BUTTON_TEXT;
  cancelButtonText = BUTTON_TEXTS.CANCEL_BUTTON_TEXT;

  form: FormGroup;

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private ngbActiveModal: NgbActiveModal
  ) {
    this.form = this.formBuilder.group({
      srNumber: [null, Validators.required],
      reason: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  blockWhatsapp(): void {
    const fieldControls = this.form.controls;

    const srNumber = fieldControls.srNumber.value;
    const reason = fieldControls.reason.value;

    console.log(srNumber, reason);
  }

  close(): void {
    this.ngbActiveModal.close();
  }
}
