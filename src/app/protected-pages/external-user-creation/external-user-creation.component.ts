import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";

@Component({
  selector: "app-external-user-creation",
  templateUrl: "./external-user-creation.component.html",
  styleUrls: ["./external-user-creation.component.scss"],
})
export class UserCreationComponent implements OnInit {
  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  title = 'External User Creation';

  loading = false;
  createUserForm: FormGroup;
  disableUserForm: FormGroup;

  roles = ["CallCenter", "Marketing"];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToasterService
  ) {
    this.createUserForm = this.formBuilder.group({
      userId: ["", Validators.required],
      role: ["CallCenter"],
    });
  }

  ngOnInit(): void {}

  createUser(): void {
    const fieldcontrols = this.createUserForm.controls;

    const emailId = fieldcontrols.emailId.value;
    const role = fieldcontrols.role.value;
    const { userId } = this.userService.currentUserValue;

    this.loading = true;
    this.userService
      .createUser(emailId, role, Number(userId))
      .subscribe((response) => {
        // const {ProcessVariables}: Response = response;
        // if (!ProcessVariables.message) {
        //   this.toasterService.show(TOASTER_MESSAGES.CREATE_USER_SUCCESS);
        //   this.loading = false;
        // } else {
        //   this.toasterService.showError(ProcessVariables.message.value);
        //   this.loading = false;
        // }
      });
  }
}
