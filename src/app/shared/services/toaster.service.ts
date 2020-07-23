import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToasterService {
  constructor() {}

  private toastsSubject = new BehaviorSubject([]);
  toasts = this.toastsSubject.asObservable();

  showSuccess(message: string) {
    this.toastsSubject.next([{ message, classname: "bg-success text-light" }]);
  }

  showError(message: string) {
    this.toastsSubject.next([{ message, classname: "bg-danger text-light" }]);
  }

  showWarning(message: string) {
    this.toastsSubject.next([{ message, classname: "bg-warning text-light" }]);
  }


  remove() {
    this.toastsSubject.next(null);
  }
}
