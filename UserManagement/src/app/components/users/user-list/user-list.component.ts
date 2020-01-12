import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { States } from 'src/app/core/models/states.enum';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit() {
    this.mockData();
  }

  deleteUser() {

  }

  mockData() {
    this.users.push({
      id: 1,
      name: 'David',
      lastName: 'Alcazar',
      account: { iban: '20145321543215568784', state: States.active },
      state: States.active
    });
    this.users.push({
      id: 2,
      name: 'Julia',
      lastName: 'Ramirez',
      account: { iban: '98465132156978651215', state: States.active },
      state: States.active
    });
    this.users.push({
      id: 3,
      name: 'Maria',
      lastName: 'Perez',
      account: { iban: '31418531521321354135', state: States.active },
      state: States.active
    });
    this.users.push({
      id: 4,
      name: 'Fernando',
      lastName: 'Manchego',
      account: { iban: '9684513154681231', state: States.active },
      state: States.active
    });
  }
}
