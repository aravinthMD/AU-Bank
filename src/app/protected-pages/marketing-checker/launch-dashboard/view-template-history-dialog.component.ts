import { Component, OnInit,Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BUTTON_TEXTS } from "src/app/shared/utils/constant";
import { UserService } from 'src/app/shared/services/user.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: "app-view-template-history-dialog",
  templateUrl: "./view-template-history-dialog.component.html",
  styleUrls: ["./view-template-history-dialog.component.scss"],
})
export class ViewTemplateHistoryDialogComponent implements OnInit {
  @Input() inputData: any
  closeButtonText = BUTTON_TEXTS.CLOSE_BUTTON_TEXT;
  sent : number;
  total :number;
  code : number;
  launchedOn : any;

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private userService:UserService,
    private toasterService: ToasterService
    ) {}

  ngOnInit(): void {
    this.fetchViewTemplate(this.inputData);
  }

  close(): void {
    this.ngbActiveModal.close();
  }

fetchViewTemplate(inputData)
{
  let id = inputData.id
  this.userService.fetchViewTemplate(id).subscribe((response) =>
  {

    console.log(response);
    const {
      ProcessVariables: { status },
      ProcessVariables: { message = {} },
    } = response;

    if (status){
    this.sent = response.ProcessVariables.sent;
    this.total = response.ProcessVariables.total;
    this.code = response.ProcessVariables.code;
    const launchedOnDate = response.ProcessVariables.launchedOn;
    this.launchedOn = launchedOnDate ? new Date(launchedOnDate).toLocaleDateString() : "";

    }
    else{
      this.toasterService.showError(message.value);
    }
    
  },
  (error) =>
  {
    this.toasterService.showError(error);
  });
}

}
