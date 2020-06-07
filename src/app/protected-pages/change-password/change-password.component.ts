import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { BUTTON_TEXTS, TOASTER_MESSAGES, PAGES } from 'src/app/shared/utils/constant';
import { ToasterService } from 'src/app/shared/services/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {

  changePasswordButtonText = BUTTON_TEXTS.CHANGE_PASSWORD_BUTTON_TEXT;
  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const regExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/;
    this.form = this.formBuilder.group({
      currentPassword: ['', [Validators.required, Validators.pattern(regExp)]],
      newPassword: ['', [Validators.required, Validators.pattern(regExp)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(regExp)]],
    });
  }


  changePassword() {
    const fieldControls = this.form.controls;

    const currentPassword = fieldControls.currentPassword.value;
    const newPassword = fieldControls.newPassword.value;
    const confirmPassword = fieldControls.confirmPassword.value;

    const {dbPassword, userId} = this.userService.currentUserValue;

    if (dbPassword === currentPassword && newPassword === confirmPassword) {
      this.loading = true;
      this.userService.changePassword(currentPassword, newPassword, confirmPassword, Number(userId)).subscribe(response => {
        this.loading = false;
        this.toasterService.showSuccess(TOASTER_MESSAGES.CHANGE_PASSWORD_SUCCESS);
        this.userService.logout();
        this.userService.clear();
        this.router.navigate([PAGES.PUBLIC]);
      });
    } else if (dbPassword !== currentPassword) {
      this.toasterService.showError(TOASTER_MESSAGES.INVALID_CURRENT_PASSWORD);
    } else if (newPassword !== confirmPassword) {
      this.toasterService.showError(TOASTER_MESSAGES.PASSWORD_MATCH_ERROR);
    }
  }
}
