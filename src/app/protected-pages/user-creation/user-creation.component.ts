import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toastr.service";
import { environment } from "src/environments/environment";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { Response } from "src/app/shared/models/user.model";

@Component({
  selector: "app-user-creation",
  templateUrl: "./user-creation.component.html",
  styleUrls: ["./user-creation.component.scss"],
})
export class UserCreationComponent implements OnInit {
  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  loading = false;
  createUserForm: FormGroup;
  disableUserForm: FormGroup;

  roles = ["CallCenter", "Marketing"];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService
  ) {
    const isProductionMode = environment.production;
    const emailRegExp = isProductionMode
      ? /^(([a-zA-Z0-9_\-\.]+)@)+axisbank.com$/
      : /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+\.)([a-zA-Z]){2,5}$/;

    this.createUserForm = this.formBuilder.group({
      emailId: ["", [Validators.required, Validators.pattern(emailRegExp)]],
      role: ["CallCenter"],
    });
  }

  ngOnInit(): void {}

  createUser(): void {
    this.loading = true;

    const fieldcontrols = this.createUserForm.controls;
    const emailId = fieldcontrols.emailId.value;
    const role = fieldcontrols.role.value;
    const { userId } = this.userService.currentUserValue;

    this.userService
      .createUser(emailId, role, Number(userId))
      .subscribe((response) => {
        const { ProcessVariables }: Response = response;
        if (!ProcessVariables.message) {
          this.toasterService.showSuccess(TOASTER_MESSAGES.CREATE_USER_SUCCESS);
          this.createUserForm.get("emailId").reset();
          this.loading = false;
        } else {
          this.toasterService.showError(ProcessVariables.message.value);
          this.loading = false;
        }
      });
  }
}
