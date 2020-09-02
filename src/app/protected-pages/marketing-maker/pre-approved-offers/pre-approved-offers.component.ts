import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { TriggerTimeValidator} from "src/app/shared/validators/TriggerTimeValidator";
import timeZones from 'src/app/shared/JsonFiles/timeZone.json'
import countryCodes from 'src/app/shared/JsonFiles/countryCodes.json';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { error } from 'protractor';


@Component({
  selector: "app-pre-approved-offers",
  templateUrl: "./pre-approved-offers.component.html",
  styleUrls: ["./pre-approved-offers.component.scss"],
})
export class PreApprovedOffersComponent implements OnInit {
  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  form: FormGroup;

  fromMinDate: any;
  fromMaxDate: any;
  toMinDate: any;
  toMaxDate: any;

  loading = false;

  dropdownSettings = {};

  timeZones:any = timeZones;
  countryCodeList:any = countryCodes;
  filteredOptions: Observable<string[]>;

  defaultTime = { hour: 12, minute: 0 };
  templateDropDown : any[] = [];
  showTemplateMessageFlag : boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService
  ) {
    this.form = this.formBuilder.group({
      templateId : [null],
      template : [null],
      timeZone: ["",Validators.required],
      countryCodes: ["",Validators.required],
      campaignStartDate: [new Date(), Validators.required],
      campaignEndDate: [null, Validators.required],
      triggerTime: [null, [Validators.required,TriggerTimeValidator()]],
    });
  }

  ngOnInit(): void {
    this.setValidators();

    this.fetchPreApprovedOffersDropDown();

    this.dropdownSettings = {
      singleSelection: false,
      idField: "dial_code",
      textField: "name",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      limitSelection:5
    };

    //AutoComplete
    this.filteredOptions = this.form.controls['timeZone'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  
  }

  private _filter(value: string): string[] {

    const filterValue = value ? value.toLowerCase() : "";

    return this.timeZones.filter(timeZone => timeZone.text.toLowerCase().includes(filterValue));
  }

  displayFn(SelectedId){
    if(!SelectedId) return '';
    let index = this.timeZones.findIndex(timeZone => timeZone.utc[0] === SelectedId);
    return this.timeZones[index].text;

  }

  setValidators(): void {
    const date = new Date();
    // this.fromMinDate = {
    //   year: 0,
    //   month: 0,
    //   day: 0,
    // };
    console.log("Date"+date.getDate()+" "+date.getFullYear()+" "+date.getMonth())
    this.fromMinDate = {
      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDate(),
    };
    this.toMinDate = {
      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDate(),
    };

    // this.toMinDate = {
    //   year: 0,
    //   month: 0,
    //   day: 0,
    // };
  }

  onFromDateChange(event: NgbDate): void {
    const { year, month, day } = event;
    this.toMinDate = { year, month, day };
  }

  onToDateChange(event: NgbDate): void {
    const { year, month, day } = event;
    this.fromMaxDate = { year, month, day };
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      const fieldControls = this.form.controls;
      const campaignStartDate = fieldControls.campaignStartDate.value;
      const triggerTime = fieldControls.triggerTime.value;
      const campaignEndDate = fieldControls.campaignEndDate.value;
      const timeZones = fieldControls.timeZone.value;
      const countryCodes = fieldControls.countryCodes.value;
      const templateObj = fieldControls.templateId.value ? fieldControls.templateId.value : "";
      const templateId = templateObj ? templateObj.templateId : ""; 
      const template = fieldControls.template.value ? fieldControls.template.value : "";
      // tslint:disable-next-line: max-line-length
      const transformedStartDate = `${campaignStartDate.year}-${campaignStartDate.month}-${campaignStartDate.day}`;
      const transformedEndDate = `${campaignEndDate.year}-${campaignEndDate.month}-${campaignEndDate.day}`;
      this.userService
        .createPreapprovedOffer(
          templateId,
          template,
          transformedStartDate,
          transformedEndDate,
          `${triggerTime.hour}:${triggerTime.minute}:00`,
          String(this.userService.currentUserValue.userId),timeZones,countryCodes
        )
        .subscribe(
          (createdOffer) => {
            const {
              ProcessVariables: { status },
              ProcessVariables: { message = {} },
            } = createdOffer;
            if (status) {
              this.toasterService.showSuccess(
                TOASTER_MESSAGES.CREATE_PREAPPROVED_OFFER_SUCCESS
              );
              this.form.reset();
              this.form.controls['timeZone'].patchValue('');
              this.showTemplateMessageFlag = false;
              this.loading = false;
            } else {
              this.loading = false;
              this.toasterService.showError(message.value);
            }
          },
          (error) => {
            this.loading = false;
            this.toasterService.showError(error);
          }
        );
    }
  }

  onTemplateIdChange()
  {
    if(this.form.controls['templateId'].value){
      const templateObj = this.form.controls['templateId'].value;
      const templateId = templateObj ? templateObj.message : null;
      this.form.controls['template'].setValue(templateId ? templateId : "");
      this.showTemplateMessageFlag = true;
    }
    
  }

  fetchPreApprovedOffersDropDown()
  {
    this.userService.getPreApprovedOffersDropDownData().subscribe((response) =>{
      this.templateDropDown = response.ProcessVariables.templateIdList;
      console.log(this.templateDropDown);
    },
    (error) => {
      this.toasterService.showError(TOASTER_MESSAGES.DROP_DOWN_FAILURE);
      console.log(error);
    });
  }

}
