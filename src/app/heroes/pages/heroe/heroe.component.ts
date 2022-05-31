import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img {
    width: 70%;
    border-radius: 30px
  }
  `
  ]
})

export class HeroeComponent implements OnInit {
 heroe!: Heroe;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heoesService: HeroesService,
    private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        switchMap((parametros) => {
          return this._heoesService.getHeroById(parametros['id'])
        })
      ).subscribe(
        heroe => this.heroe = heroe,
        error => console.error(error)
      )
  }

  regresar() {
    this._router.navigate(['/heroes/listado'])
  }
}
