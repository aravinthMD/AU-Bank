import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-marketing-maker",
  templateUrl: "./marketing-maker.component.html",
  styleUrls: ["./marketing-maker.component.scss"],
})
export class MarketingMakerComponent implements OnInit {
  constructor(private userService : UserService) {}


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
      debugger;
      if(true){
        const {
          ProcessVariables : {id ,timeZones}
        } = response;
        console.log(timeZones);
        if(timeZones){
          this.timeZonesList = timeZones;
        }
      }
    })
  }

}