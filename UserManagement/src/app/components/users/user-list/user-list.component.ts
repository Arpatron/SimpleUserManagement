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
      accounts: [{ iban: '201453215432145568784', state: States.active }],
      state: States.active
    });
    this.users.push({
      id: 2,
      name: 'Julia',
      lastName: 'Ramirez',
      accounts: [
        { iban: '984651321569786513215', state: States.active },
        { iban: '543221468743515486744', state: States.inactive },
        { iban: '321564874635435156474', state: States.active },
      ],
      state: States.active
    });
    this.users.push({
      id: 3,
      name: 'Maria',
      lastName: 'Perez',
      accounts: [{ iban: '314185315213213541351', state: States.active }],
      state: States.active
    });
    this.users.push({
      id: 4,
      name: 'Fernando',
      lastName: 'Manchego',
      accounts: [
        { iban: '651321354135132186415', state: States.active },
        { iban: '968451315468512318565', state: States.active }
      ],
      state: States.active
    });
  }
}
