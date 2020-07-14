import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";

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

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: ["", Validators.required],
      password: ["", Validators.required],
      isExternalUser: [false],
    });

    // If user already logged in and redirect to home page
    const currentUser = localStorage.getItem("currentUser");
    const currentHome = localStorage.getItem("currentHome");

    if (currentUser) {
      this.returnUrl = this.route.snapshot.queryParams.returnUrl
        ? this.route.snapshot.queryParams.returnUrl
        : JSON.parse(currentHome);
      this.router.navigate([this.returnUrl]);
    }
  }

  get fieldControls() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.loading = true;
    this.userService
      .generateAuthenticationToken(
        this.fieldControls.userId.value,
        this.fieldControls.password.value
      )
      .subscribe((response) => {
        if (response.token) {
          this.login();
        }
      });
  }

  login() {
    this.userService
      .login(this.fieldControls.userId.value, this.fieldControls.password.value)
      .subscribe((response) => {
        const currentHome = this.userService.currentHomeValue;
        this.toasterService.show(TOASTER_MESSAGES.LOGIN_SUCCESS, {
          classname: "bg-success text-light",
        });
        this.loading = false;
        this.router.navigate([currentHome]);
        // else {
        //   this.toasterService.showError(response.message.value);
        //   this.loading = false;
        // }
      });
  }
}
