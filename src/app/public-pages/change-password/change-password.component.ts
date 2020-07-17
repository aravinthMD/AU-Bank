import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/shared/services/user.service";
import {
  BUTTON_TEXTS,
  TOASTER_MESSAGES,
  PAGES,
} from "src/app/shared/utils/constant";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { Router } from "@angular/router";
import { LoginProcessVariables } from "src/app/shared/models/user.model";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordButtonText = BUTTON_TEXTS.CHANGE_PASSWORD_BUTTON_TEXT;

  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      currentPassword: ["", Validators.required],
      newPassword: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    });
  }

  changePassword(): void {
    this.loading = true;
    const fieldControls = this.form.controls;
    const currentPassword = fieldControls.currentPassword.value;
    const newPassword = fieldControls.newPassword.value;
    const confirmPassword = fieldControls.confirmPassword.value;
    const { dbPassword, userId, userName } = this.userService.currentUserValue;
    if (dbPassword === currentPassword && newPassword === confirmPassword) {
      this.userService
        .changePassword(
          currentPassword,
          newPassword,
          confirmPassword,
          Number(userId)
        )
        .subscribe((response) => {
          if (response) {
            const currentHome = this.userService.currentHomeValue;
            const currentUser: LoginProcessVariables = this.userService
              .currentUserValue;
            currentUser.dbPassword = newPassword;
            currentUser.isFirstLogin = "false";
            this.userService.setCurrentUserSubject(currentUser);
            this.loading = false;
            this.toasterService.show(TOASTER_MESSAGES.CHANGE_PASSWORD_SUCCESS, {
              classname: "bg-success text-light",
            });
            this.router.navigate([currentHome]);
          }
        });
    } else if (dbPassword !== currentPassword) {
      this.loading = false;
      this.toasterService.show(TOASTER_MESSAGES.INVALID_CURRENT_PASSWORD, {
        classname: "bg-warning text-light",
      });
    } else if (newPassword !== confirmPassword) {
      this.loading = false;
      this.toasterService.show(TOASTER_MESSAGES.PASSWORD_MATCH_ERROR, {
        classname: "bg-warning text-light",
      });
    }
  }
}
