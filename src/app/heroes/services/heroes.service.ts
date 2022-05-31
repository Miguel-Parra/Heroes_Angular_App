import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private _httpClient: HttpClient) { }


  getHeroes(): Observable<Heroe[]> {
    return this._httpClient.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroById(idHeroe: string): Observable<Heroe> {
    console.log(idHeroe);

    return this._httpClient.get<Heroe>(`${this.baseUrl}/heroes/${idHeroe}`)
  }

  getSuggestions(termino: string): Observable<Heroe[]> {
    return this._httpClient.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`)
  }

  saveHero(heroe: Heroe): Observable<Heroe> {
    return this._httpClient.post<Heroe>(`${this.baseUrl}/heroes/`, heroe)
  }

  updateHero(heroe: Heroe): Observable<Heroe> {
    return this._httpClient.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe)
  }

  deleteHero(id: string): Observable<any> {
    return this._httpClient.delete<any>(`${this.baseUrl}/heroes/${id}`)
  }
}
