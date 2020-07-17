import { Component, OnInit } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-public-home",
  templateUrl: "./public-home.component.html",
  styleUrls: ["./public-home.component.scss"],
})
export class PublicHomeComponent implements OnInit {
  currentYear = new Date().getFullYear();
  version = environment.version;

  constructor() {}

  ngOnInit(): void {}
}
