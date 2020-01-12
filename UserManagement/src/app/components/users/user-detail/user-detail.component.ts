import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdministrationService } from 'src/app/core/services/administration.service';
import { IUser } from 'src/app/core/models/user';
import { States } from 'src/app/core/models/states.enum';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private adminService: AdministrationService,
    private route: ActivatedRoute,
    private router: Router) { }

  user: IUser;
  errorMessage = '';

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.mockData();
      // this.getUser(id);
    }
  }

  getUser(id: number) {
    this.adminService.getUser(id).subscribe({
      next: user => this.user = user,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['userList']);
  }


  mockData() {
    this.user = {
      id: 1,
      name: 'David',
      lastName: 'Alcazar',
      account: { iban: '20145321543215568784', state: States.active },
      state: States.active
    };
  }
}
