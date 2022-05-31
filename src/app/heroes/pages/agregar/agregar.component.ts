import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 20px;
  }
  `
  ]
})
export class AgregarComponent implements OnInit {
  idHeroe: string = '';
  publishers = [
    { id: 'DC Comics', description: 'DC - Comics' },
    { id: 'Marvel Comics', description: 'Marvel - Comics' }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''

  }


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (!(this._router.url.includes('editar'))) return;
    this._activatedRoute.params
      .pipe(
        switchMap(({ id }) => this._heroeService.getHeroById(id))
      )
      .subscribe(
        heroeC => this.heroe = heroeC
        , error => console.warn(error))
  }

  guardarHeroe() {
    if (this.heroe.superhero.trim().length === 0) return;
    if (this.heroe.id) {
      this._heroeService.updateHero(this.heroe).subscribe(
        heroeU => this.mostrasSnackBar('Registro Actualizado')
      )
    } else {
      this._heroeService.saveHero(this.heroe).subscribe(
        heroeC => {
          this._router.navigate(['/heroes/editar', heroeC.id])
          this.mostrasSnackBar('Registro Creado')
        }
      )
    }
  }

  borrarHeroe() {
    const dialog = this._matDialog.open(ConfirmarComponent,
      { width: '250px', data: { ...this.heroe } });
    dialog.afterClosed().subscribe(
      resp => {
        if (resp) {
          this._heroeService.deleteHero(this.heroe.id!)
            .subscribe(
              respuesta => this._router.navigate(['/heroes'])
            )
        }
      }
    )
  }

  mostrasSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'ok!', { duration: 3000 })
  }
}


