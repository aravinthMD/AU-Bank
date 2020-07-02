import { Component, OnInit } from "@angular/core";
import { BUTTON_TEXTS } from "src/app/shared/utils/constant";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbDate, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ViewTemplateHistoryDialogComponent } from "./view-template-history-dialog.component";

@Component({
  selector: "app-launch-dashboard",
  templateUrl: "./launch-dashboard.component.html",
  styleUrls: ["./launch-dashboard.component.scss"],
})
export class LaunchDashboardComponent implements OnInit {
  activateButtonText = BUTTON_TEXTS.ACTIVATE_BUTTON_TEXT;
  deactivateButtonText = BUTTON_TEXTS.DEACTIVATE_BUTTON_TEXT;
  viewButtonText = BUTTON_TEXTS.VIEW_BUTTON_TEXT;

  form: FormGroup;
  templates = [];

  tableHeaders = [
    "Template Id",
    "Created On",
    "No of Dynamic Parameters",
    "Upload Time",
    "Launch ID",
    "Campaign End Date",
    "Action",
    "Audit",
  ];

  filterOptions = ["All", "Active", "Inactive"];

  today = new Date();

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;

  constructor(private formBuilder: FormBuilder, private ngbModal: NgbModal) {
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
        templateId: "T00000002",
        createdOn: "26/06/2020, 12:00PM",
        uploadTime: "3:00PM",
        launchId: "Launch0002",
        dynamicParameters: "2",
        campaignEndDate: "26/07/2020, 12:00PM",
        status: "Active",
      },
      {
        templateId: "T00000003",
        createdOn: "26/06/2020, 12:00PM",
        uploadTime: "4:00PM",
        launchId: "Launch0003",
        dynamicParameters: "2",
        campaignEndDate: "26/07/2020, 12:00PM",
        status: "Inactive",
      },
    ];
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

  openTemplateHistoryDialog(): void {
    this.ngbModal.open(ViewTemplateHistoryDialogComponent, { centered: true });
  }
}
