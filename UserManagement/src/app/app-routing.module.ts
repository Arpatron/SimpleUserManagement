import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/users/user-delete/user-delete.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { PageNotFoundComponent } from './components/others/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'editUser/:id', component: UserEditComponent },
  { path: 'deleteUser', component: UserDeleteComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'newUser', component: UserCreateComponent },
  { path: 'userList', component: UserListComponent },
  { path: '', redirectTo: 'userList', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
