import { Component, OnInit } from '@angular/core';
import { States } from 'src/app/core/models/states.enum';
import { AdministrationService } from 'src/app/core/services/administration.service';
import { CreateUserRequest } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private adminService: AdministrationService) { }

  userRequest: CreateUserRequest = {
    name: '',
    lastName: '',
    state: States.active,
    account: { iban: '', state: States.active }
  };

  ngOnInit() {

  }

  submit() {
    if (this.validateData()) {
      this.adminService.postCreateUser(this.userRequest).subscribe(data => { });
    }
  }

  validateData(): boolean {
    let result: boolean;

    if (this.userRequest.name == '' || this.userRequest.lastName == '' || this.userRequest.account.iban == '') {
      result = false;
    }
    else {
      result = true
    }

    return result;
  }
}
