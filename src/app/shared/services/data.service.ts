import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  
  public getAllPokemons(amount: Number, start: Number): Observable<any>{
    return this.http.get<any>(`poke/api/v2/pokemon/?limit=${amount}&offset=${start}`);
  }

  public getOnePokemon(url: string): Observable<any>{
    return this.http.get<any>(`poke/${url}`);
  }
}
