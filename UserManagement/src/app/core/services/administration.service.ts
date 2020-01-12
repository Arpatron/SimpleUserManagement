import { Injectable } from '@angular/core';
import { UserRequest } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(  private http: HttpClient) { }

  postCreateUser(request: UserRequest): Observable<any>{
    var body = JSON.stringify(request);
    return this.http.post<any>('url', body);
  }
}
