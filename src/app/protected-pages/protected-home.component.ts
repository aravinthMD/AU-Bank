import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected-home',
  templateUrl: './protected-home.component.html',
  styleUrls: ['./protected-home.component.scss'],
})
export class ProtectedHomeComponent implements OnInit {
  userName: string;

  constructor() {}

  ngOnInit(): void {}

  logout() {}
}
