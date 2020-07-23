import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import {
  BUTTON_TEXTS,
  ROLES,
  PAGES,
  MENU_TITLES,
  TOASTER_MESSAGES,
} from "src/app/shared/utils/constant";
import { ReferenceService } from "src/app/shared/services/reference.service";

@Component({
  selector: "app-user-creation",
  templateUrl: "./user-creation.component.html",
  styleUrls: ["./user-creation.component.scss"],
})
export class UserCreationComponent implements OnInit {
  submitButtonText = BUTTON_TEXTS.SUBMIT_BUTTON_TEXT;

  superAdminForm: FormGroup;
  adminForm: FormGroup;

  loading = false;
  currentUserRole: string;
  userRoles: string[] = Object.values(ROLES).filter(
    (role) => role !== ROLES.SUPER_ADMIN
  );
  accessControls = [];
  selectedMenuList = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private referenceService: ReferenceService,
    private toasterService: ToasterService
  ) {
    this.superAdminForm = this.formBuilder.group({
      userId: ["", [Validators.required]],
      userRole: [ROLES.ADMIN, Validators.required],
      accessMenus: [""],
    });

    this.adminForm = this.formBuilder.group({
      userId: ["", [Validators.required]],
      userRole: [ROLES.USER],
      accessMenus: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.currentUserRole = this.userService.currentUserValue.roleName;
    this.accessControls = this.referenceService.getAvailableAccessControls();
  }

  onRoleChanged(): void {
    const selectedRole = this.superAdminFieldControls.userRole.value;
    if (selectedRole === ROLES.USER) {
      const accessMenus = this.superAdminFieldControls.accessMenus;
      accessMenus.setValidators(Validators.required);
      this.superAdminForm.updateValueAndValidity();
    } else {
      const accessMenus = this.superAdminFieldControls.accessMenus;
      accessMenus.setValidators(null);
      this.superAdminForm.updateValueAndValidity();
    }
    this.superAdminForm.patchValue({
      accessMenus: null,
    });
    this.selectedMenuList = [];
  }

  get superAdminFieldControls() {
    return this.superAdminForm.controls;
  }

  get adminFieldControls() {
    return this.adminForm.controls;
  }

  onChange(event: any, option: any): void {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.selectedMenuList.push(option.value);
    } else {
      const index = this.selectedMenuList.findIndex(
        (menuValue) => menuValue === option.value
      );
      this.selectedMenuList.splice(index, 1);
    }
    this.validate();
  }

  validate(): void {
    const maker = this.selectedMenuList.find((item) => item === 3);
    const checker = this.selectedMenuList.find((item) => item === 4);
    const makerElement = document.getElementById(MENU_TITLES.MARKETING_MAKER);
    const checkerElement = document.getElementById(
      MENU_TITLES.MARKETING_CHECKER
    );
    if (maker && !checker) {
      checkerElement.setAttribute("disabled", "true");
    } else if (checker && !maker) {
      makerElement.setAttribute("disabled", "true");
    } else {
      makerElement.removeAttribute("disabled");
      checkerElement.removeAttribute("disabled");
    }
  }

  createUser(): void {
    this.loading = true;
    const userId =
      this.currentUserRole === ROLES.SUPER_ADMIN
        ? this.superAdminFieldControls.userId.value
        : this.adminFieldControls.userId.value;

    const userRole =
      this.currentUserRole === ROLES.SUPER_ADMIN
        ? this.superAdminFieldControls.userRole.value
        : this.adminFieldControls.userRole.value;

    const currentUserId = this.userService.currentUserValue.userId;

    this.userService
      .createUser(
        userId,
        userRole,
        Number(currentUserId),
        this.selectedMenuList
      )
      .subscribe(
        (response) => {
          const {
            ProcessVariables: { status },
            ProcessVariables: { message = {} },
          } = response;
          if (status) {
            this.toasterService.showSuccess(
              TOASTER_MESSAGES.CREATE_USER_SUCCESS
            );
            this.superAdminForm.reset();
            this.adminForm.reset();
            this.loading = false;
          } else {
            this.loading = false;
            this.toasterService.showError(message.value);
          }
        },
        (error) => {
          this.loading = false;
          this.toasterService.showError(error);
        }
      );
  }
}
