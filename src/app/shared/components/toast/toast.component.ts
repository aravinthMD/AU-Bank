import { Component, OnInit, TemplateRef } from "@angular/core";
import { ToasterService } from "../../services/toastr.service";

@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.scss"],
})
export class ToastComponent implements OnInit {
  toasts = [];

  constructor(public toastService: ToasterService) {
    this.toastService.toasts.subscribe((response) => {
      this.toasts = response;
    });
  }

  ngOnInit(): void {}

  remove() {
    this.toastService.remove();
  }
}
