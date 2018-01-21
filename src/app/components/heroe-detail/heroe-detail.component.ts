import { Component, OnInit, Input } from '@angular/core';

import { Heroe } from '../../models/Heroe';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  @Input()
  heroe: Heroe

  constructor() { }

  ngOnInit() {
  }

}
