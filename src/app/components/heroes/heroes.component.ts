import { Component, OnInit } from '@angular/core';

import { Heroe } from '../../models/Heroe';
import { HeroeService } from '../../services/heroe/heroe-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  heroeSeleccionado: Heroe;

  constructor(private heroeServ: HeroeService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroeServ.getHeroes().subscribe( hers => {
      this.heroes = hers;
    });
  }

  onSelect(heroe: Heroe) {
    this.heroeSeleccionado = heroe;
  }

}
