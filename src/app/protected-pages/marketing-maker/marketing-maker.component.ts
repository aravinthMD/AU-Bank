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
  ngOnInit(): void {
    this.getBlockTriggerTime();
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

}