import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  BUTTON_TEXTS,
  TOASTER_MESSAGES,
  PAGES,
  ROLES,
  BOOLEANS,
  MESSAGES
} from "src/app/shared/utils/constant";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { LoginProcessVariables } from "src/app/shared/models/entity-model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginButtonText = BUTTON_TEXTS.LOGIN_BUTTON_TEXT;

  loginForm: FormGroup;

  loading = false;
  returnUrl: string;
  errroMsg : string = MESSAGES.INVALID_USER;
  invalidUserFlag : boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: [null, Validators.required],
      password: [null, Validators.required],
      isExternalUser: [false],
    });

    // If user already logged in and redirect to home page
    const currentUser: LoginProcessVariables = JSON.parse(
      sessionStorage.getItem("currentUser")
    );
    const currentHome = sessionStorage.getItem("currentHome");

    if (currentUser) {
      const isUserAndFirstLogin =
        currentUser.roleName === ROLES.USER &&
        currentUser.isFirstLogin === BOOLEANS.TRUE;
      if (!isUserAndFirstLogin) {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl
          ? this.route.snapshot.queryParams.returnUrl
          : JSON.parse(currentHome);
        this.router.navigate([this.returnUrl]);
      } else {
        this.router.navigate([PAGES.CHANGE_PASSWORD]);
      }
    }
  }

  get fieldControls() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.loading = true;
    const fieldControls = this.loginForm.controls;
    const isExternalUser = fieldControls.isExternalUser.value;
    this.userService
      .login(
        this.fieldControls.userId.value,
        this.fieldControls.password.value,
        isExternalUser ? false : true
      )
      .subscribe(
        () => {
          this.invalidUserFlag = false;
          this.getUserDetail();
          this.loading = false;
        },
        (error) => {
          this.toasterService.showError(error);
          this.invalidUserFlag = true
          this.loading = false;
        }
      );
  }

  getUserDetail() {
    this.loading = true;
    this.userService.getUserDetail(this.fieldControls.userId.value).subscribe(
      (response) => {
        if (response && response.status) {
          if (
            response.roleName !== ROLES.USER ||
            (response.roleName === ROLES.USER &&
              response.isFirstLogin === BOOLEANS.FALSE)
          ) {
            this.loading = false;
            this.toasterService.showSuccess(TOASTER_MESSAGES.LOGIN_SUCCESS);
            const currentHome = this.userService.currentHomeValue;
            this.router.navigate([currentHome]);
          } else if (
            response.roleName === ROLES.USER &&
            response.isFirstLogin === BOOLEANS.TRUE
          ) {
            this.loading = false;
            this.toasterService.showWarning(
              TOASTER_MESSAGES.CHANGE_PASSWORD_WARNING
            );

            this.router.navigate([PAGES.CHANGE_PASSWORD]);
          }
        } else {
          this.loading = false;
          this.toasterService.showError(response.message.value);
        }
      },
      (error) => {
        this.loading = false;
        this.toasterService.showError(error);
      }
    );
  }
}
