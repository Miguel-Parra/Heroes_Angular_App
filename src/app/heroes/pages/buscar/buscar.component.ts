import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino: string = "";
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor(private _heroesServicce: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    if ((this.termino.trim()) !== '') {
      this._heroesServicce.getSuggestions(this.termino.trim())
        .subscribe(
          heroes => this.heroes = heroes,
          error => console.log(error)
        )
    } else {
      this.heroes = []
    }
  }

  opcionSeleccionada(evento: MatAutocompleteSelectedEvent) {
    if (!evento.option.value) {
      this.heroeSeleccionado = undefined
      return;
    }
    const heroe: Heroe = evento.option.value;
    this.termino = heroe.superhero
    this._heroesServicce.getHeroById(heroe.id!)
      .subscribe(
        heroeB => this.heroeSeleccionado = heroeB,
        error => console.log(error)
      )
  }

}
