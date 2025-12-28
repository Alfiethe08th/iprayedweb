import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prayercard } from './prayercard';

describe('Prayercard', () => {
  let component: Prayercard;
  let fixture: ComponentFixture<Prayercard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prayercard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prayercard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
