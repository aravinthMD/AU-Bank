import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BUTTON_TEXTS } from "src/app/shared/utils/constant";

@Component({
  selector: "app-view-template-history-dialog",
  templateUrl: "./view-template-history-dialog.component.html",
  styleUrls: ["./view-template-history-dialog.component.scss"],
})
export class ViewTemplateHistoryDialogComponent implements OnInit {
  closeButtonText = BUTTON_TEXTS.CLOSE_BUTTON_TEXT;

  constructor(private ngbActiveModal: NgbActiveModal) {}

  ngOnInit(): void {}

  close(): void {
    this.ngbActiveModal.close();
  }
}
