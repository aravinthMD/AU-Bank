import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";

@Component({
  selector: "app-marketing-maker",
  templateUrl: "./marketing-maker.component.html",
  styleUrls: ["./marketing-maker.component.scss"],
})
export class MarketingMakerComponent implements OnInit {
  constructor(private userService : UserService,private toasterService : ToasterService) {}


  blockedFrom : any ;
  blockedTo : any;
  blockedBy : any;
  id : any;

  timeZonesList : any[] = [];
  ngOnInit(): void {
    // this.getBlockTriggerTime();
    this.fetchTimeZonesBasedBlockedTimes();
  }


  getBlockTriggerTime(){
    this.userService.getTriggerTimeBlock("1").subscribe((response) =>{
      console.log(response);
      const {
        ProcessVariables: {  message = {} },
      } = response;
      if(true){
        const {
          ProcessVariables : {blockedBy ,blockedFrom,blockedTo,id }
        } = response;
        this.blockedBy = blockedBy;
        this.blockedFrom = blockedFrom;
        this.blockedTo = blockedTo;
        this.id = id;
      }else{

      }
    })
  }

  fetchTimeZonesBasedBlockedTimes(){
    this.userService.fetchTimeZonesBasedBlockedTimes().subscribe((response) =>{
      if(response){
        console.log(response);

        const {
          ProcessVariables : {id ,status,timeZones}
        } = response;
        console.log(timeZones);
        if(status){ //For Local Testing
          if(timeZones){
            this.timeZonesList = timeZones;
          }
        }
        else{
          this.toasterService.showError(
            TOASTER_MESSAGES.DROP_DOWN_FAILURE
          )
        }
      }
    })
  }

}