import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BUTTON_TEXTS, TOASTER_MESSAGES } from 'src/app/shared/utils/constant';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/shared/services/user.service';
import { ToasterService } from 'src/app/shared/services/toastr.service';

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

  returnUrl: string;


  submitted = false;
  isFirstLogin: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private toasterService: ToasterService,  private router: Router,
              private route: ActivatedRoute) {
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

      // If user already logged in and redirect to home page
    const currentUser = localStorage.getItem('currentUser');
    const currentHome = localStorage.getItem('currentHome');

    if (currentUser) {
      this.returnUrl = this.route.snapshot.queryParams.returnUrl ? this.route.snapshot.queryParams.returnUrl : JSON.parse(currentHome);
      this.router.navigate([this.returnUrl]);
    }
  }

  onSubmit(): void {
    this.loading = true;
    const fieldControls = this.loginForm.controls;

    const emailId = fieldControls.emailId.value;
    const password = fieldControls.password.value;

   // this.userService.generateAuthenticationToken(emailId, password);

    this.userService.login(emailId, password).subscribe(response => {
      if (!response.message) {
        if (response.isFirstLogin === 'true') {
          console.log('first login so redirecting to reset password');
        } else {
          const currentHome = this.userService.currentHomeValue;
          this.toasterService.showSuccess(TOASTER_MESSAGES.LOGIN_SUCCESS);
          this.loading = false;
          this.router.navigate([currentHome]);
         }
      } else {
        this.toasterService.showError(response.message.value);
        this.loading = false;
      }
    });
  }
}
