import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserService} from 'src/app/shared/services/user.service'
import { ToasterService } from "src/app/shared/services/toaster.service";
import {TOASTER_MESSAGES} from 'src/app/shared/utils/constant'

@Component({
  selector: 'app-update-trigger-time-pop-up',
  templateUrl: './update-trigger-time-pop-up.component.html',
  styleUrls: ['./update-trigger-time-pop-up.component.scss']
})
export class UpdateTriggerTimePopUpComponent implements OnInit {

  forms : FormGroup;
  blockedFrom : any;
  blockedTo : any;
  timeZoneText :  any;
  timeZoneId : any;

  updatedFlag : boolean;

  constructor(private formBuilder : FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,private userService : UserService,private toasterService : ToasterService,
  public dialogRef: MatDialogRef<UpdateTriggerTimePopUpComponent>) { 
    this.forms = this.formBuilder.group({
      FromTime : [],  
      ToTime : []
     })


     if(this.data){
      this.blockedFrom  = this.data['blockedFrom'];
      this.blockedTo = this.data['blockedTo'];
      this.timeZoneText = this.data['text'];
      this.timeZoneId = this.data['id'];
     }
     
     this.configurable(this.blockedFrom,this.blockedTo);
  }

  ngOnInit(): void {
  }

  configurable(blockedFrom : any,blockedTo : any){
    let blockFromDate = blockedFrom.split(":");
    const FromHour : number   = Number(blockFromDate[0]);
    const FromMin : number = Number(blockFromDate[1]);
    let blockToDate = blockedTo.split(":");
    const ToHour : number  = Number(blockToDate[0]);
    const ToMin :  number = Number(blockToDate[1]);
    this.forms.controls['FromTime'].setValue({hour : FromHour, minute : FromMin});
    this.forms.controls['ToTime'].setValue({hour:ToHour,minute : ToMin})
  }


  OnEdit(){
    const fieldControls = this.forms.controls;
    const fromTime  = fieldControls.FromTime.value;
    const toTime = fieldControls.ToTime.value;
    const currentUserId  = this.userService.currentUserValue.userId;

    // const blockFromTime  = `${fromTime.hour}:${fromTime.minute}:00`;
    const blockFromTime = this.timeFormatConverter(fromTime,'00');
    const blockToTime  =  this.timeFormatConverter(toTime,'00');


    this.userService.updateTimeZonesBasedBlockedTime(this.timeZoneId,currentUserId,blockFromTime,blockToTime).subscribe((response) =>{
       if(response){
        console.log(response);

        const {
            ProcessVariables : {status}
        } = response;

        if(status){
          this.updatedFlag = true;
          this.toasterService.showSuccess(
            TOASTER_MESSAGES.UPDATE_BLOCK_TIME_SUCCESS
          )
          this.updatedFlag = true;
          this.dialogRef.close(this.updatedFlag) 
        }
        else{
          this.toasterService.showError(
            TOASTER_MESSAGES.UPDATE_BLOCK_TIME_FAILURE
          )
        }

       }
    })

  }


    timeFormatConverter(timeVal,seconds ?: string){
      let fromTimeHourTemp = '00'+timeVal.hour;
      let formTimeMinuteTemp = '00'+timeVal.minute;

      const fromTimeHourFormatted = fromTimeHourTemp.substr(-2);
      const fromTimeMinuteFormatted = formTimeMinuteTemp.substr(-2);
      return  ` ${fromTimeHourFormatted}:${fromTimeMinuteFormatted}:${seconds}`;
    }


}

