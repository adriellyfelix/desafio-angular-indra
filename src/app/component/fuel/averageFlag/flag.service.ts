import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flag } from './flag.model';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  apiUrl = 'https://combustivelapp.herokuapp.com/api/combustivel/valor-media-compra-venda-bandeira'

  constructor(private http: HttpClient) { }

  read(): Observable<Flag[]> {
    return this.http.get<Flag[]>(this.apiUrl)
  }
}
