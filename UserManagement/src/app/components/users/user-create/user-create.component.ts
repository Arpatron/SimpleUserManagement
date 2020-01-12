import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor() { }

  user: User;

  ngOnInit() {
  }

  submit(){
    console.log("submit");
    
  }

  addAccount(){
    console.log("add");

  }
}
