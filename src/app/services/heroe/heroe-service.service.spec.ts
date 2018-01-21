import { TestBed, inject } from '@angular/core/testing';

import { HeroeServiceService } from './heroe-service.service';

describe('HeroeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroeServiceService]
    });
  });

  it('should be created', inject([HeroeServiceService], (service: HeroeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
