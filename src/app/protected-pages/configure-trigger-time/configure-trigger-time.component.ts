import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import {UserService} from 'src/app/shared/services/user.service'
import { ToasterService } from "src/app/shared/services/toaster.service";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { error } from 'protractor';



@Component({
  selector: 'app-configure-trigger-time',
  templateUrl: './configure-trigger-time.component.html',
  styleUrls: ['./configure-trigger-time.component.scss']
})
export class ConfigureTriggerTimeComponent implements OnInit {

 
  fromTime = {hour: 13, minute: 30};
  toTime = {hour: 13, minute: 30};
  // forms : FormGroup;
  blockedBy : any ;
  blockedFrom : any;
  blcokedTo : any;
  id : any;
  loading = false;
  flag : boolean;
  fromTimeVar : any;
  toTimeVar : any;


  constructor(private formBuilder : FormBuilder,private userService : UserService,private toasterService:ToasterService) 
  {
    // this.forms = this.formBuilder.group({
    //   fromTime : [null],
    //   toTime : [null]
    // });
   }

   forms = this.formBuilder.group({
    FromTime : [null],  
    ToTime : [null]
   })

  ngOnInit(): void {
    this.getBlockTriggerTime();

  }

  tableHeaders = ["TimeZones" , "FromBlocKTIme","ToBlockTIme","Action"]

  templates = [
    {timeZones : "(UTC-12:00) International Date Line West",fromBlockTime : "10:00:00",toBlockTime : "22:00:00"},
    {timeZones : "(UTC-10:00) Hawaii",fromBlockTime : "10:00:00",toBlockTime : "22:00:00"},
    {timeZones : "(UTC-09:00) Alaska",fromBlockTime : "10:00:00",toBlockTime : "22:00:00"},
    {timeZones : "(UTC-07:00) Arizona",fromBlockTime : "10:00:00",toBlockTime : "22:00:00"},
    {timeZones : "(UTC-07:00) Mountain Time (US & Canada)",fromBlockTime : "10:00:00",toBlockTime : "22:00:00"},
    {timeZones : "(UTC-06:00) Central Time (US & Canada)",fromBlockTime : "10:00:00",toBlockTime : "22:00:00"},
    {timeZones : "(UTC-06:00) Guadalajara, Mexico City, Monterrey",fromBlockTime : "10:00:00",toBlockTime : "22:00:00"},
    {timeZones : "(UTC-12:00) International Date Line West",fromBlockTime : "10:00:00",toBlockTime : "22:00:00"},
    {timeZones : "(UTC-12:00) International Date Line West",fromBlockTime : "10:00:00",toBlockTime : "22:00:00"},

  ]

  OnSubmit(){
    const fieldControls = this.forms.controls;
    const fromTime = fieldControls.FromTime.value;
    const toTime  = fieldControls.ToTime.value;

    const currentUserId = this.userService.currentUserValue.userId;
    const blockFromTime  = `${fromTime.hour}:${fromTime.minute}:00`;
    const blockToTime  = `${toTime.hour}:${toTime.minute}:00`
    this.userService.updateBlockTriggerTime(blockFromTime,blockToTime,Number(currentUserId),"")
    .subscribe((response) => {
      console.log();
    })
  }


  

  OnEdit(){
    const fieldControls = this.forms.controls;
    const fromTime = fieldControls.FromTime.value;
    const toTime  = fieldControls.ToTime.value;
    const currentUserId = this.userService.currentUserValue.userId;
    
    const blockFromTime  = `${fromTime.hour}:${fromTime.minute}:00`;
    const blockToTime  = `${toTime.hour}:${toTime.minute}:00`
    this.loading = true;
    
    this.userService.updateBlockTriggerTime(blockFromTime,blockToTime,Number(currentUserId),this.id)
    .subscribe((response) => {
      console.log(response);
      const {
        ProcessVariables : {status },
        ProcessVariables : { message = {} },
      } = response;
      if(status){
        this.forms.reset();
        this.loading = false;

        this.toasterService.showSuccess(
          TOASTER_MESSAGES.UPDATE_BLOCK_TIME_SUCCESS
        )
      this.getBlockTriggerTime();
      }
        else{
          this.toasterService.showError(
            TOASTER_MESSAGES.UPDATE_BLOCK_TIME_FAILURE
          )
          this.loading = false;
        }
      
    },(error) =>{
      this.loading = false;
      this.toasterService.showError(error);
      console.log(error);
    })
  }


  getBlockTriggerTime(){
    this.userService.getTriggerTimeBlock("1").subscribe((response) =>{
      const {
        ProcessVariables: {  message = {} },
      } = response;
      console.log(response);
      if(true){
        const {
          ProcessVariables : {blockedBy ,blockedFrom,blockedTo,id }
        } = response;
        this.blockedBy = blockedBy;
        this.blockedFrom = blockedFrom;
        this.blcokedTo = blockedTo;
        this.id = id;

        this.configurable(blockedFrom,blockedTo);

      }
    })
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


}
