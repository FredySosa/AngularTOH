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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroeServ.addHero({ name } as Heroe)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Heroe): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroeServ.deleteHero(hero).subscribe();
  }

}
