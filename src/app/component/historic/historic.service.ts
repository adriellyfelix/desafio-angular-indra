import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historic } from './historic.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricService {

  apiUrl = 'https://combustivelapp.herokuapp.com/api/historico';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  create(historic: Historic): Observable<Historic> {
    return this.http.post<Historic>(this.apiUrl, historic)

  }

  read(): Observable<Historic[]> {
    return this.http.get<Historic[]>(this.apiUrl)
  }

  readById(id: any): Observable<Historic> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Historic>(url)
  }

  delete(id: any): Observable<Historic> {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Historic>(url)
  }

}
