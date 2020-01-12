import { Component, OnInit } from '@angular/core';
import { User, UserRequest } from 'src/app/core/models/user';
import { BankAccount } from 'src/app/core/models/bank-account';
import { States } from 'src/app/core/models/states.enum';
import { AdministrationService } from 'src/app/core/services/administration.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private adminService: AdministrationService) { }

  user: User = new User();
  formAccounts: BankAccount[] = [];

  ngOnInit() {
    this.formAccounts.push({
      iban: '',
      state: States.active
    });
  }

  submit() {
    if (this.validateData()) {
      this.user.accounts = this.formAccounts;
      let request: UserRequest = this.setRequest();
      this.adminService.postCreateUser(request).subscribe(data => {});
    }
  }

  validateData(): boolean {
    let result: boolean = false;

    return result;
  }

  setRequest(): UserRequest {
    let result: UserRequest = {
      name: this.user.name,
      lastName: this.user.lastName,
      state: this.user.state,
      accounts: this.user.accounts
    };

    return result;
  }

  addAccount() {
    this.formAccounts.push({
      iban: '',
      state: States.active
    });
  }

  dropAccount(iban: string) {
    let accountToRemove: BankAccount = this.formAccounts.find(x => x.iban == iban);
    let accountIndex: number = this.formAccounts.indexOf(accountToRemove);
    this.formAccounts.splice(accountIndex, 1);
    if (this.formAccounts.length == 0) {
      this.addAccount();
    }
  }
}
