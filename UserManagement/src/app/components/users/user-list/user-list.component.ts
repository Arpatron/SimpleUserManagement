import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/user';
import { States } from 'src/app/core/models/states.enum';
import { Router } from '@angular/router';
import { AdministrationService } from 'src/app/core/services/administration.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];
  errorMessage = '';

  constructor(private adminService: AdministrationService,
    private router: Router) { }

  ngOnInit() {
    this.mockData();
    // this.getData();
  }

  getData() {
    this.adminService.getUsers().subscribe({
      next: users => {
        this.users = users;
      },
      error: err => this.errorMessage = err
    });
  }

  deleteUser() {

  }

  seeDetails(id: number){
    this.router.navigate(['/detail', id]);
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
