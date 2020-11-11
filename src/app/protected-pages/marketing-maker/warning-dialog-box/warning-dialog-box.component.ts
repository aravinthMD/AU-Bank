import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-warning-dialog-box',
  templateUrl: './warning-dialog-box.component.html',
  styleUrls: ['./warning-dialog-box.component.scss']
})
export class WarningDialogBoxComponent implements OnInit {

  fromTime : string;
  toTime :  string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.configureTimeZone(this.data);
  }
  configureTimeZone(data : string){

    if(data){
    this.fromTime = data['fromTime'] ? data['fromTime'].substring(0,6) : "";
    this.toTime = data['toTime'] ? data['toTime'].substring(0,6) : "";
    
    }
    

  }

  Converter(time) : number{
      let timeVal : string[] = time.split(":")
    return Number(timeVal[0]);
  }

}
