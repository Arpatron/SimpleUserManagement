import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title: string;
  user: string;

  ngOnInit() {
    this.setUpData();
  }

  setUpData() {
    this.title = 'Users Management';
    // call to service to asign user info and stufs
    this.user = 'Admin test';
  }

  logOut() {

  }
}
