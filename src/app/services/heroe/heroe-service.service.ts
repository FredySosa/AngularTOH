import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Heroe } from '../../models/Heroe';
import { HEROES } from '../../vars/mock-heroes';

import { MessageService } from '../message/message.service';

@Injectable()
export class HeroeService {

  constructor(private messageServ: MessageService) {

  }


  getHeroes(): Observable<Heroe[]> {
    this.messageServ.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
