import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from './provider.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  apiUrl = 'https://combustivelapp.herokuapp.com/api/combustivel/dados-agrupados-por-distribuidora';

  constructor(private http: HttpClient) { }

  read(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.apiUrl)
  }
}
