import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BUTTON_TEXTS, TOASTER_MESSAGES } from 'src/app/shared/utils/constant';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/shared/services/user.service';
import { ToasterService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  loading = false;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    const isProductionMode: boolean = environment.production;
    const emailRegExp = isProductionMode
      ? /^(([a-zA-Z0-9_\-\.]+)@)+axisbank.com$/
      : /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+\.)([a-zA-Z]){2,5}$/;

    this.form = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.pattern(emailRegExp)]],
    });
  }

  onSubmit(): void {
    this.loading = true;
    const fieldControls = this.form.controls;
    const email = fieldControls.emailId.value;

    this.userService.forgotPassword(email).subscribe((response) => {
      const { ProcessVariables } = response;
      if (!ProcessVariables.message) {
        this.toasterService.showSuccess(
          TOASTER_MESSAGES.FORGOT_PASSWORD_SUCCESS
        );
        this.loading = false;
      } else {
        this.loading = false;
        this.toasterService.showError(ProcessVariables.message.value);
      }
    });
  }
}
