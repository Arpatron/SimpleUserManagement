import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserDeleteComponent } from './components/users/user-delete/user-delete.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { PageNotFoundComponent } from './components/others/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserEditComponent,
    UserDetailComponent,
    UserListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
