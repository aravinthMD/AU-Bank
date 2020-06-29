import { Injectable, TemplateRef } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToasterService {
  constructor(private toastr: ToastrService) {}

  private toastsSubject = new BehaviorSubject([]);
  toasts = this.toastsSubject.asObservable();

  show(message: string, options: any = {}) {
    this.toastsSubject.next([{ message, ...options }]);
  }

  remove() {
    this.toastsSubject.next(null);
  }

  showSuccess(message: string) {
    this.toastr.success(message);
  }

  showError(message: string) {
    this.toastr.error(message);
  }

  showWarning(message: string) {
    this.toastr.warning(message);
  }
}
