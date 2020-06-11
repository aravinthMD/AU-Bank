import { Component, OnInit } from "@angular/core";
import {
  BUTTON_TEXTS,
  PAGES,
  TOASTER_MESSAGES,
} from "src/app/shared/utils/constant";
import { ToasterService } from "src/app/shared/services/toastr.service";
import { UserService } from "src/app/shared/services/user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordButtonText = BUTTON_TEXTS.RESET_PASSWORD_BUTTON_TEXT;
  userId: number;
  form: FormGroup;

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private toasterService: ToasterService,
    private router: Router
  ) {
    const paswordRegExp = /^([a-zA-Z,0-9,~!@#$%&*()_+-]){8,}$/;
    this.form = this.formBuilder.group({
      newPassword: [
        "",
        [Validators.required, Validators.pattern(paswordRegExp)],
      ],
      confirmPassword: [
        "",
        [Validators.required, Validators.pattern(paswordRegExp)],
      ],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = Number(params.id);
    });
  }

  resetPassword(): void {
    this.loading = true;

    const fieldControls = this.form.controls;
    const newPassword = fieldControls.newPassword.value;
    const confirmPassword = fieldControls.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      this.toasterService.showError(TOASTER_MESSAGES.PASSWORD_MATCH_ERROR);
      this.loading = false;
    } else {
      this.userService
        .resetPassword(newPassword, confirmPassword, this.userId)
        .subscribe((response) => {
          this.toasterService.showSuccess(
            TOASTER_MESSAGES.RESET_PASSWORD_SUCCESS
          );
          this.router.navigate([PAGES.PUBLIC]);
          this.loading = false;
        });
    }
  }
}
