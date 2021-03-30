import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiUrl = 'https://combustivelapp.herokuapp.com/api/combustivel/valor-media-compra-venda-municipio'


  constructor(private http: HttpClient) { }

  read(): Observable<City[]> {
    return this.http.get<City[]>(this.apiUrl)
  }

}
