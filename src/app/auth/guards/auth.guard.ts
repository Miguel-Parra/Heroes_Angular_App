import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.verificarAutenticacion()
      .pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado) this._router.navigate(['auth'])
        })
      );
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.verificarAutenticacion()
      .pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado) this._router.navigate(['auth'])
        })
      );
  }
}
