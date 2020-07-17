import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  BUTTON_TEXTS,
  TOASTER_MESSAGES,
  MENU_TITLES,
} from "src/app/shared/utils/constant";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { UserService } from "src/app/shared/services/user.service";
import { ReferenceService } from "src/app/shared/services/reference.service";
import { EntityResponse } from "src/app/shared/models/user.model";

@Component({
  selector: "app-user-dialog",
  templateUrl: "./user.dialog.component.html",
  styleUrls: ["./user.dialog.component.scss"],
})
export class UserDialogComponent implements OnInit {
  @Input() userId: number;

  updateButtonText = BUTTON_TEXTS.UPDATE_BUTTON_TEXT;
  cancelButtonText = BUTTON_TEXTS.CANCEL_BUTTON_TEXT;

  form: FormGroup;

  userDetail: { activityList: number[]; roleName: string; userName: string };

  loading = false;
  accessControls = [];
  selectedMenuList = [];

  constructor(
    private formBuilder: FormBuilder,
    private ngbActiveModal: NgbActiveModal,
    private userService: UserService,
    private referenceService: ReferenceService,
    private toasterService: ToasterService
  ) {
    this.form = this.formBuilder.group({
      userId: ["", [Validators.required]],
      accessMenus: [""],
    });
  }

  ngOnInit(): void {
    this.accessControls = this.referenceService.getAvailableAccessControls();
    this.fetchUserActivityByUserId();
  }

  fetchUserActivityByUserId() {
    this.loading = true;
    this.userService
      .fetchUserActivityByUserId(this.userId)
      .subscribe((response) => {
        if (response) {
          const {
            ProcessVariables: { status },
          } = response;
          if (status) {
            this.setForm(response);
          }
          this.loading = false;
        } else {
          this.loading = false;
          this.close();
          this.userService.closeAndLogout();
        }
      });
  }

  setForm(response: EntityResponse): void {
    const {
      ProcessVariables: { activityList, roleName, userName },
    } = response;
    this.userDetail = { activityList, roleName, userName };
    this.form.patchValue({
      userId: userName,
    });

    this.validateAndSetAttributes();
  }

  validateAndSetAttributes() {
    const { activityList } = this.userDetail;
    const isViewWhatsappChecked = activityList.find(
      (activity) => activity === 1
    );
    const isBlockWhatsappChecked = activityList.find(
      (activity) => activity === 2
    );
    const isMarketingMakerChecked = activityList.find(
      (activity) => activity === 3
    );
    const isMarketingCheckerChecked = activityList.find(
      (activity) => activity === 4
    );

    const checkBoxElements = document
      .getElementById("checkboxes")
      .getElementsByTagName("input");

    if (isViewWhatsappChecked) {
      checkBoxElements[0].checked = true;
      this.selectedMenuList.push(1);
    }
    if (isBlockWhatsappChecked) {
      checkBoxElements[1].checked = true;
      this.selectedMenuList.push(2);
    }
    if (isMarketingMakerChecked) {
      checkBoxElements[2].checked = true;
      this.selectedMenuList.push(3);
    }
    if (isMarketingCheckerChecked) {
      checkBoxElements[3].checked = true;
      this.selectedMenuList.push(4);
    }
   // this.validate();
  }

  get fieldControls() {
    return this.form.controls;
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
    // this.validate();
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

  updateUser(): void {
    this.loading = true;
    const currentUserId = this.userService.currentUserValue.userId;
    this.userService
      .updateUser(this.userId, this.selectedMenuList, Number(currentUserId))
      .subscribe((response) => {
        if (response) {
          const {
            ProcessVariables: { status },
            ProcessVariables: { message = {} },
          } = response;
          if (status) {
            this.toasterService.show(TOASTER_MESSAGES.UPDATE_USER_SUCCESS, {
              classname: "bg-success text-light",
            });
            this.loading = false;
            this.close("SUCCESS");
          } else {
            this.loading = false;
            this.toasterService.show(message.value, {
              classname: "bg-danger text-light",
            });
          }
        } else {
          this.loading = false;
          this.close();
          this.userService.closeAndLogout();
        }
      });
  }

  close(message?: string): void {
    this.ngbActiveModal.close(message);
  }
}
