import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BUTTON_TEXTS } from 'src/app/shared/utils/constant';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginButtonText = BUTTON_TEXTS.LOGIN_BUTTON_TEXT;

  loading = false;
  errorMessage: any;

  loginForm: FormGroup;

  submitted = false;
  isFirstLogin: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    let emailRegExp: any;

    if (environment.production) {
      emailRegExp = /^(([a-zA-Z0-9_\-\.]+)@)+axisbank.com$/;
    } else {
      emailRegExp = /^(([a-zA-Z0-9_\-\.]+)@)+appiyo.com$/;
    }
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.pattern(emailRegExp)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.loading = true;
    const fieldControls = this.loginForm.controls;

    const emailId = fieldControls.emailId.value;
    const password = fieldControls.password.value;

    this.userService.login(emailId, password).subscribe(response => {
      console.log('Login Response', response);
      this.loading = false;
    },
    error => {
      console.log('Login Error', error);
      this.loading = false;
    });

    // // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }else{
    //   this._login.login(this.loginForm.controls['emailid'].value,this.loginForm.controls['password'].value);
    //   // this.loginForm.reset();
    //   this.isFirstLogin = localStorage.getItem('isFirstLogin');
    //   console.log(this.isFirstLogin)
    //   if (this.isFirstLogin === "false"){
    //     this._router.navigate(['/dashboard']);
    //  }
    //   if (this.isFirstLogin === "true"){
    //     this._router.navigate(['/resetpassword']);
    //  }
    // }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }
}
