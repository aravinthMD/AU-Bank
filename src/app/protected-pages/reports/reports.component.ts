import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { reportType } from 'src/app/shared/models/utill-model'
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {


  optedInData : reportType;
  optedOutData : reportType;
  blockedOptedOn : reportType;
  smsOptedOn : reportType;
  missedCallOptedOn : reportType;
  whatsAppOptedOn : reportType;
  webSiteOptedOn : reportType;
  MBIBOptedOn : reportType;

  loading : boolean;

  constructor(private userService  : UserService,private toasterService :ToasterService) { }

  ngOnInit(): void {
    this.fetchReports();
  }

  fetchReports(){
    this.loading = true
      this.userService.fetchReportsAPi().subscribe((response) => {

        const {
          ProcessVariables: { status },
          ProcessVariables: { message = {} },
        } = response;

        if(true){
           this.optedInData =   (response.ProcessVariables.optedTrue ? response.ProcessVariables.optedTrue[0] : '' );
           this.optedOutData =  (response.ProcessVariables.optedOutOn ? response.ProcessVariables.optedOutOn[0]  : '');
           this.blockedOptedOn = (response.ProcessVariables.blockedOptedOn ? response.ProcessVariables.blockedOptedOn[0] : '');
           this.smsOptedOn = (response.ProcessVariables.smsOptedOn ?  response.ProcessVariables.smsOptedOn[0] : '');
           this.missedCallOptedOn = (response.ProcessVariables.missedCallOpedOn ? response.ProcessVariables.missedCallOpedOn[0] :  '');
           this.whatsAppOptedOn = (response.ProcessVariables.whatsappOptedOn ? response.ProcessVariables.whatsappOptedOn[0]  :'');
           this.webSiteOptedOn = (response.ProcessVariables.websiteOptedOn ? response.ProcessVariables.websiteOptedOn[0] : '');
           this.MBIBOptedOn = (response.ProcessVariables.websiteOptedOn ? response.ProcessVariables.websiteOptedOn[0] : '');
           this.loading = false;
        }
        else { 
          this.toasterService.showError(message.value)
          this.loading = false
        }

      })
  }

}
