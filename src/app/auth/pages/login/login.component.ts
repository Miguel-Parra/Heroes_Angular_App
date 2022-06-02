import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from "../../interfaces/auth.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  login() {
    // In al backend
    // obtener un usuario
    this._authService.login().subscribe({
      next: (resp: Auth) => {
        console.log(resp);
        if (resp.id) {
          this._router.navigate(['/heroes'])
        }
      }
      , error: error => console.log('Usuario no autenticado', error)
    })
  }

  loginPrueba(){
    this._authService.logout();
  }

}
