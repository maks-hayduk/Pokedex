import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  public getAllPokemons(amount: Number): Observable<Array<any>>{
    return this.http.get<Array<any>>(`http://pokeapi.co/api/v1/pokemon/?limit=${amount}`);
  }
}
