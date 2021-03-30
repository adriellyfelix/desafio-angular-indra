import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abbreviation } from './abbreviation.model';

@Injectable({
  providedIn: 'root'
})
export class AbbreviationService {

  apiUrl = 'https://combustivelapp.herokuapp.com/api/combustivel/dados-por-sigla';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  readByAbbreviation(abbreviation: any): Observable<Abbreviation> {
    const url = `${this.apiUrl}/${abbreviation}`
    return this.http.get<Abbreviation>(url)
  }

}
