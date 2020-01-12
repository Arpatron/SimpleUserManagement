import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }
  user: IUser;

  ngOnInit() {
    console.log(this.user);
  }

  onBack(): void {
    this.router.navigate(['userList']);
  }

}
