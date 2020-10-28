import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import {UserService} from 'src/app/shared/services/user.service'
import { ToasterService } from "src/app/shared/services/toaster.service";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UpdateTriggerTimePopUpComponent} from './update-trigger-time-pop-up/update-trigger-time-pop-up.component'

@Component({
  selector: 'app-configure-trigger-time',
  templateUrl: './configure-trigger-time.component.html',
  styleUrls: ['./configure-trigger-time.component.scss']
})
export class ConfigureTriggerTimeComponent implements OnInit,AfterViewInit {

 
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
  timeZonesList :  any[] = [];


  dataSource : any = new MatTableDataSource<any[]>();

  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;


  constructor(private formBuilder : FormBuilder,private userService : UserService,private toasterService:ToasterService,private dialog: MatDialog) 
  {
    
   }

   forms = this.formBuilder.group({
    FromTime : [null],  
    ToTime : [null]
   })

  ngOnInit(): void {
    this.getBlockTriggerTime();
    this.fetchTimeZonesBasedBlockedTimes();

  }
  ngAfterViewInit(){
  }

  tableHeaders = ["S.NO","TimeZones" , "FromBlockedTime","ToBlockedTime","Action"]

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

  fetchTimeZonesBasedBlockedTimes(){
    this.userService.fetchTimeZonesBasedBlockedTimes().subscribe((response) => {
      if(true){
        const {
          ProcessVariables : { id ,timeZones}
        } = response;
        console.log(timeZones);
        if(timeZones){
          this.dataSource = new MatTableDataSource<any[]>(timeZones);
          this.dataSource.paginator = this.paginator;
        }
      }
    })
  }


  applyFilter(filterValue : string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  OpenDialog(formObject : any){
    const dialogRef = this.dialog.open(UpdateTriggerTimePopUpComponent,{width:'100%',data:formObject});
  }

}
