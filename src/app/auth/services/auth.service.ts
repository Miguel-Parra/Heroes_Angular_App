import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _urlBase: string = environment.baseUrl;
  private _auth: Auth | undefined


  get usuarioAut() {
    return { ...this._auth! }
  }

  constructor(
    private _httpClient: HttpClient,
  ) { }


  verificarAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false)
    };
    return this._httpClient.get<Auth>(`${this._urlBase}/usuarios/1`)
      .pipe(
        map(resp => {
          this._auth = resp
          return resp ? true : false
        })
      )
  }

  login(): Observable<Auth> {
    return this._httpClient.get<Auth>(`${this._urlBase}/usuarios/1`)
      .pipe(
        tap(resp => this._auth = resp),
        tap(resp => localStorage.setItem('token', resp.id))
      )
  }

  logout() {
    localStorage.clear();
  }
}
