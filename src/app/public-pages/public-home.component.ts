import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-public-home",
  templateUrl: "./public-home.component.html",
  styleUrls: ["./public-home.component.scss"],
})
export class PublicHomeComponent implements OnInit {
  currentYear = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
