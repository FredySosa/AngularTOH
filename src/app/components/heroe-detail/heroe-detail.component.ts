import { Component, OnInit, Input } from '@angular/core';

import { Heroe } from '../../models/Heroe';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroeService } from '../../services/heroe/heroe-service.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  @Input()
  heroe: Heroe

  constructor(private route: ActivatedRoute,
              private heroServ: HeroeService,
              private location: Location) { }

  ngOnInit() {
    this.getHeroe();
  }


  getHeroe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroServ.getHero(id).subscribe( hero => {
      this.heroe = hero;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
