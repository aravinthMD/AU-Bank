import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BUTTON_TEXTS } from "src/app/shared/utils/constant";

@Component({
  selector: "app-preview-template-dialog",
  templateUrl: "./preview-template-dialog.component.html",
  styleUrls: ["./preview-template-dialog.component.scss"],
})
export class PreviewTemplateDialogComponent implements OnInit {
  launchButtonText = BUTTON_TEXTS.LAUNCH_BUTTON_TEXT;
  cancelButtonText = BUTTON_TEXTS.CANCEL_BUTTON_TEXT;

  constructor(private ngbActiveModal: NgbActiveModal) {}

  ngOnInit(): void {}

  close(): void {
    this.ngbActiveModal.close();
  }
}
