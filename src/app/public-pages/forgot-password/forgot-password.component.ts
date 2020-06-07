import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BUTTON_TEXTS, TOASTER_MESSAGES } from 'src/app/shared/utils/constant';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/shared/services/user.service';
import { ToasterService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;
  loading = false;
  errorMessage: any;

  form: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    let emailRegExp: any;

    if (environment.production) {
      emailRegExp = /^(([a-zA-Z0-9_\-\.]+)@)+axisbank.com$/;
    } else {
      emailRegExp = /^(([a-zA-Z0-9_\-\.]+)@)+appiyo.com$/;
    }
    this.form = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.pattern(emailRegExp)]],
    });
  }

  onSubmit(): void {
    this.loading = true;
    const fieldControls = this.form.controls;
    const email = fieldControls.emailId.value;

    this.userService.forgotPassword(email).subscribe(
      (data) => {
        console.log(data);
        this.toasterService.showSuccess(
         TOASTER_MESSAGES.FORGOT_PASSWORD_SUCCESS
        );
        this.loading = false;
      },
      (error) => {
        this.toasterService.showError(error);
        this.loading = false;
      }
    );
  }
}
