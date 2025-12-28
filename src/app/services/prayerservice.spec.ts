import { TestBed } from '@angular/core/testing';

import { Prayerservice } from './prayerservice';

describe('Prayerservice', () => {
  let service: Prayerservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prayerservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
