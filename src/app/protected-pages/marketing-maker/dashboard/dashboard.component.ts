import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  tableHeaders = [
    "Template Id",
    "Template",
    "No of Dynamic Parameters",
    "Status",
  ];

  templates: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    this.templates = [
      {
        templateId: "T00000001",
        template:
          // tslint:disable-next-line: max-line-length
          "Chennai Example bank offers life time free credit card. Initial limit is P1. Visit https://www.chennaiexamplebank.com and fill your details today.",
        dynamicParameters: "2",
        status: "APPROVED",
      },
      {
        templateId: "T00000002",
        template:
          // tslint:disable-next-line: max-line-length
          "Chennai Example bank offers life time free credit card. Initial limit is P1. Visit https://www.chennaiexamplebank.com and fill your details today.",
        dynamicParameters: "2",
        status: "REJECTED",
      },
    ];
  }

  openTemplateDetail(template: any): void {
    window.alert(template.templateId);
  }
}
