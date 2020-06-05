import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BUTTON_TEXTS } from 'src/app/shared/utils/constant';

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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const emailRegExp = /^(([a-zA-Z0-9_\-\.]+)@)+axisbank.com$/;
    this.form = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.pattern(emailRegExp)]],
    });
  }

  onSubmit() {
    // if (this.forgetPassword.invalid) {
    //   return;
    // } else {
    //   this._passService.forget(this.forgetPassword.controls['emailId'].value);
    // }
  }
}
