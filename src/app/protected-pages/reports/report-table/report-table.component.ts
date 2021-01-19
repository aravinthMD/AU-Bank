import { Component, Input, OnInit } from '@angular/core';
import { reportType } from 'src/app/shared/models/utill-model';

@Component({
  selector: 'report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {

  @Input('data')  data  : reportType ;

  constructor() { }

  ngOnInit(): void {
  }

}
