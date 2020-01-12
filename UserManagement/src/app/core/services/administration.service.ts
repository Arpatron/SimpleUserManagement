import { CreateUserRequest, IUser } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

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

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('url')
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getUser(id: number): Observable<IUser | undefined> {
    return this.http.get<IUser>('url/' + id)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
