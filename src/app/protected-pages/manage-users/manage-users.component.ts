import { Component, OnInit } from "@angular/core";
import { BUTTON_TEXTS } from "src/app/shared/utils/constant";
import { UserService } from "src/app/shared/services/user.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { User } from "src/app/shared/models/user.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserDialogComponent } from "./user.dialog.component";
import { DisableUserDialogComponent } from "./disable-user-dialog.component";

@Component({
  selector: "app-manage-users",
  templateUrl: "./manage-users.component.html",
  styleUrls: ["./manage-users.component.scss"],
})
export class ManageUsersComponent implements OnInit {
  editButtontext = BUTTON_TEXTS.EDIT_BUTTON_TEXT;
  disableUserButtonText = BUTTON_TEXTS.DISABLE_BUTTON_TEXT;

  loading = false;

  currentPage = 1;
  pageSize = 10;
  collectionSize: number;
  usersList: User[];

  constructor(
    private ngbDialog: NgbModal,
    private userService: UserService,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.fetchUsers(this.currentPage);
  }

  fetchUsers(pageNumber: number): void {
    window.scroll(0, 0);
    this.loading = true;
    this.userService
      .fetchUsers(this.pageSize, pageNumber)
      .subscribe((response) => {
        if (response) {
          const {
            ProcessVariables: { usersList, totalCount },
          } = response;
          this.collectionSize = totalCount;
          this.usersList = usersList;
          this.loading = false;
        } else {
          this.loading = false;
          this.userService.closeAndLogout();
        }
      });
  }

  editUser({ userId }): void {
    const dialog = this.ngbDialog.open(UserDialogComponent, {
      centered: true,
    });
    dialog.componentInstance.userId = userId;
    dialog.result.then((res) => {
      if (res === "SUCCESS") {
        this.fetchUsers(this.currentPage);
      }
    });
  }

  disableUser({ userId, username }): void {
    const dialog = this.ngbDialog.open(DisableUserDialogComponent, {
      centered: true,
    });
    dialog.componentInstance.userId = userId;
    dialog.componentInstance.userName = username;

    dialog.result.then((res) => {
      if (res === "SUCCESS") {
        this.fetchUsers(this.currentPage);
      }
    });
  }
}
