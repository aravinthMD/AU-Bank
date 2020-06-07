import { Component, OnInit } from '@angular/core';
import { BUTTON_TEXTS, TOASTER_MESSAGES } from 'src/app/shared/utils/constant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/shared/services/user.service';
import { ToasterService } from 'src/app/shared/services/toastr.service';
import { UserProcessVariables } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-block-existing-user',
  templateUrl: './block-existing-user.component.html',
  styleUrls: ['./block-existing-user.component.scss']
})
export class BlockExistingUserComponent implements OnInit {
submitButtontext = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;
disableUserButtonText = BUTTON_TEXTS.DISABLE_USER_BUTTON_TEXT;

today = new Date();

fetchUserLoading = false;
disableUserLoading = false;

userDetail: UserProcessVariables;

form: FormGroup;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private toasterService: ToasterService) {
    let emailRegExp: any;

    if (environment.production) {
      emailRegExp = /^(([a-zA-Z0-9_\-\.]+)@)+axisbank.com$/;
    } else {
      emailRegExp = /^(([a-zA-Z0-9_\-\.]+)@)+gmail.com$/;
    }
    this.form = this.formBuilder.group({
      emailId : ['', [Validators.required, Validators.pattern(emailRegExp)]]
  });
  }

  ngOnInit(): void {
  }

  fetchUser(): void {
    this.fetchUserLoading = true;
    const emailId = this.form.get('emailId').value;
    const {userId} = this.userService.currentUserValue;

    this.userService.fetchUserByEmailId(emailId, Number(userId)).subscribe(response => {
      console.log(response);
      const {ProcessVariables} = response;
      if (!ProcessVariables.message) {
       this.toasterService.showSuccess(TOASTER_MESSAGES.FETCH_USER_SUCCESS);
       this.userDetail = ProcessVariables;
       this.fetchUserLoading = false;
      } else {
        this.toasterService.showError(ProcessVariables.message.value);
        this.fetchUserLoading = false;
      }

    });

  }

  disableUser(): void {
    this.disableUserLoading = true;
    const {userId} = this.userService.currentUserValue;
    this.userService.disableUserById(this.userDetail.newUserId, Number(userId)).subscribe(response => {
      this.toasterService.showSuccess(TOASTER_MESSAGES.DISABLE_USER_SUCCESS);
      this.userDetail = null;
      this.disableUserLoading = false;
    });
  }

}
