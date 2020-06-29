import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToasterService {
  constructor() {}

  private toastsSubject = new BehaviorSubject([]);
  toasts = this.toastsSubject.asObservable();

  show(message: string, options: any = {}) {
    this.toastsSubject.next([{ message, ...options }]);
  }

  remove() {
    this.toastsSubject.next(null);
  }
}
