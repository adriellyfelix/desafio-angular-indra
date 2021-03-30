import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://combustivelapp.herokuapp.com/api/usuarios';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  create(user: User): Observable <User>{
    return this.http.post<User>(this.apiUrl, user)
  }

  read(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }

  readById(id: any): Observable<User> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<User>(url)
  }

  update(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`
    return this.http.put<User>(url, user)
  }

  delete(id: any): Observable<User> {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<User>(url)
  }
}
