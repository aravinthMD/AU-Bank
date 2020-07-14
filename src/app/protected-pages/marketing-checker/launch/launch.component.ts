import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  BUTTON_TEXTS,
  REPORT_FILTER_TYPES,
} from "src/app/shared/utils/constant";
import { NgbDate, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PreviewTemplateDialogComponent } from "./preview-template-dialog.component";
import { ReferenceService } from "src/app/shared/services/reference.service";

@Component({
  selector: "app-launch",
  templateUrl: "./launch.component.html",
  styleUrls: ["./launch.component.scss"],
})
export class LaunchComponent implements OnInit {
  launchButtonText = BUTTON_TEXTS.LAUNCH_BUTTON_TEXT;

  form: FormGroup;
  templates = [];

  tableHeaders = [
    "Template Id",
    "Created On",
    "Template",
    "No of Dynamic Parameters",
    "Campaign End Date",
    "Action",
  ];

  filterOptions = Object.values(REPORT_FILTER_TYPES);

  today = new Date();

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;

  constructor(
    private formBuilder: FormBuilder,
    private referenceService: ReferenceService,
    private ngbModal: NgbModal
  ) {
    this.form = this.formBuilder.group({
      fromDate: [null, Validators.required],
      toDate: [null, Validators.required],
      filterType: ["All", Validators.required],
    });
    this.setValidators();
  }

  ngOnInit(): void {
    this.templates = [
      {
        templateId: "T00000001",
        createdOn: "26/06/2020, 12:00PM",
        template:
          // tslint:disable-next-line: max-line-length
          "Chennai Example bank offers life time free credit card. Initial limit is P1. Visit https://www.chennaiexamplebank.com and fill your details today.",
        dynamicParameters: "2",
        campaignEndDate: "26/07/2020, 12:00PM",
      },
    ];
  }

  setValidators(): void {
    const {
      minDate,
      maxDate,
    } = this.referenceService.getDefaultDateValidators();

    this.fromMinDate = minDate;
    this.fromMaxDate = maxDate;

    this.toMinDate = minDate;
    this.toMaxDate = maxDate;
  }

  onFromDateChange(event: NgbDate): void {
    const { year, month, day } = event;
    this.toMinDate = { year, month, day };
  }

  onToDateChange(event: NgbDate): void {
    const { year, month, day } = event;
    this.fromMaxDate = { year, month, day };
  }

  openPreviewTemplateDialog(): void {
    this.ngbModal.open(PreviewTemplateDialogComponent, { centered: true });
  }
}
