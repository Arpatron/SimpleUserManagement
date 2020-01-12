import { Injectable } from '@angular/core';
import { CreateUserRequest } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }

  postCreateUser(request: CreateUserRequest): Observable<any> {
    var body = JSON.stringify(request);
    return this.http.post<any>('url', body);
  }

  postDeleteUser(idUser: string): Observable<any> {
    var body = JSON.stringify(idUser);
    return this.http.post<any>('url', body);
  }
}
