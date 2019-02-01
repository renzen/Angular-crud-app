import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Users } from '../model/shared/user.model';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';



const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class DataService {

  // private BASE_URL = 'http://localhost:5000/';

  //private BASE_URL = 'https://jsonplaceholder.typicode.com/'

 BASE_URL = 'http://localhost:5000/';

constructor(private http: HttpClient, private messageService: MessageService) { }


getUsers(): Observable<any>  {
  return this.http.get(this.BASE_URL + 'users').pipe(
  tap(_ => this.log('get all users')),
  catchError(this.handleError<any>('getallusers')));
  }

getUser(userId): Observable<any>  {
    return this.http.get(this.BASE_URL + 'user/' + userId).pipe(
    tap(_ => this.log(`get user id = ${userId}`)),
    catchError(this.handleError<any>('getUser')));
}

updateUser(userId, model:Users): Observable<any>  {
  console.log(JSON.stringify(model));
      return this.http.put(this.BASE_URL + 'updateUser/' + userId, model).pipe(
      tap(_ => this.log(`get user id = ${userId}`)),
      catchError(this.handleError<any>('updateUser')));
}

AddUser(model:Users): Observable<any>  {
  console.log('Add user' ,JSON.stringify(model));
  return this.http.post(this.BASE_URL + 'Users', model).pipe(
  tap(_ => this.log('add users')),
  catchError(this.handleError<any>('add Users')));
  }

getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

//Success handler
private extractData(response: Response){
if(response.status < 200 || response.status >= 300){
throw new Error(`Bad response status: ${response.status}`);
}
return response.json();
}


/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add('Data Service: ' + message);
}

/**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
  // TODO: send the error to remote logging infrastructure
  console.error(error); // log to console instead
  // TODO: better job of transforming error for user consumption
  this.log(`${operation} failed: ${error.message}`);
  // Let the app keep running by returning an empty result.
  return of(result as T);
  };

}
}
