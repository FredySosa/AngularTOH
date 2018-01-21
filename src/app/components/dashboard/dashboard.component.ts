import { Component, OnInit } from '@angular/core';

import { Heroe } from '../../models/Heroe';
import { HeroeService } from '../../services/heroe/heroe-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Heroe[];

  constructor(private heroeServ: HeroeService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroeServ.getHeroes().subscribe( hers => {
      this.heroes = hers.slice(1, 5);
    });
  }

}
