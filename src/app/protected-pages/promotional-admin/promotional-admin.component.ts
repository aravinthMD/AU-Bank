import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { MatTabChangeEvent } from '@angular/material/tabs';
import {MatTableDataSource} from '@angular/material/table';
import { ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'app-promotional-admin',
  templateUrl: './promotional-admin.component.html',
  styleUrls: ['./promotional-admin.component.scss']
})
export class PromotionalAdminComponent implements OnInit {


  //Promotional Form
  form1 : FormGroup;

  //PreApproved Form
  form2 : FormGroup;

  displayedColumns: string[] = ['S.No', 'templateId', 'templateName','templateMessage', 'createdOn','templateType'];

  dataSource : any = new MatTableDataSource<any[]>();
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;



  constructor(private formBuilder :  FormBuilder,private userService : UserService,private toasterService : ToasterService) 
  {
    this.form1 = this.formBuilder.group({
      templateId : [null,Validators.required],
      templateName : [null,Validators.required],
      templateMessage : [null,Validators.required],
    })

    this.form2 = this.formBuilder.group({
      templateId : [null,Validators.required],
      templateName : [null,Validators.required],
      templateMessage : [null,Validators.required]
    })
   }

  ngOnInit(): void {
    this.fetchTemplates();
    
  }

  tabChanged  = (tabChangeEvent : MatTabChangeEvent  ) : void  =>{

    if(tabChangeEvent.index == 0)
    this.fetchTemplates();

    if(tabChangeEvent.index == 1)
    this.form1.reset();

    if(tabChangeEvent.index == 2)
    this.form2.reset();

  }


  MatTabelDataSourceConverter(DATA : any[]) : MatTableDataSource<any> {
    let data = new MatTableDataSource<any>(DATA);
    return data;
  }


  fetchTemplates(){
    this.userService.fetchAdminTemplates().subscribe((response) => {
      const {
        ProcessVariables: { status },
        ProcessVariables: { message = {},errorMessage },
      } = response;

      this.dataSource = this.MatTabelDataSourceConverter(response.ProcessVariables.templateDetails);
      this.dataSource.paginator = this.paginator;

      // if(status){
      //   this.dataSource = this.MatTabelDataSourceConverter(response.ProcessVariables.templateDetails);

      // }
      // else{
      //   this.toasterService.showError(`${TOASTER_MESSAGES.DASHBOARD_DETAILS_FAIL}`);
      // }

    },(error) => {
      this.toasterService.showError(error);
    })
  }

  OnSubmitPromotional(){
    const feildControls =  this.form1.controls;

    const templateId = feildControls.templateId.value;
    const templateName = feildControls.templateName.value;

    const templateMessage = feildControls.templateMessage.value;

    const templateType  = "promotional";

    const userId : string = this.userService.currentUserValue.userId;

    this.userService.createAdminTemplates(templateId,templateName,templateMessage,templateType).subscribe((response) => {
      console.log(response);

      const {
        ProcessVariables : {status,dupTempId,dupTempName},
        ProcessVariables : {errorMessage },
      } = response;

      if(status){
        this.toasterService.showSuccess(
          TOASTER_MESSAGES.CREATE_PROMOTIONAL_TEMPLATE_SUCCESS
          );

          this.form1.reset();

      }
      else {
        if(dupTempId){
          this.toasterService.showError(
            `Promotional template  ${dupTempId} Already Created`  
          );
          console.log("Dupliacte"+dupTempId);
        }
         console.log("Error" + errorMessage);
        //  this.toasterService.showError(
        //    TOASTER_MESSAGES.PRMOTIONAL_TEMPLATE_ADMIN_FAIL+" "+errorMessage
        //  );

      }

    })

  }

  OnSubmitPreApproved(){
    const feildControls =  this.form2.controls;

    const templateId = feildControls.templateId.value;
    const templateName = feildControls.templateName.value;
    const templateMessage = feildControls.templateMessage.value;

    const templateType  = "preOffered";


    const userId :  string = this.userService.currentUserValue.userId;

    this.userService.createAdminTemplates(templateId,templateName,templateMessage,templateType).subscribe((response) => {
      
      console.log(response);

      const {
        ProcessVariables : {status,dupTempId,dupTempName},
        ProcessVariables : {errorMessage },
      } = response;

      if(status){
        this.toasterService.showSuccess(
          TOASTER_MESSAGES.CREATE_PREAPPROVED_OFFER_SUCCESS
          );
 
          this.form2.reset();

      }
      else {
        if(dupTempId){
          this.toasterService.showError(
            `PreApproved template  ${dupTempId} Already Created`  
          );
          console.log("Dupliacte"+dupTempId);
        }
         console.log("Error" + errorMessage);
        //  this.toasterService.showError(
        //    TOASTER_MESSAGES.PREAPPROVED_TEMPLATE_ADMIN_FAIL+" "+errorMessage
        //  );

      }

    
    })

  }

}
