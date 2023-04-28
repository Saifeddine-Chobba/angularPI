import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationProfileComponent } from './reservation-profile.component';

describe('ReservationProfileComponent', () => {
  let component: ReservationProfileComponent;
  let fixture: ComponentFixture<ReservationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
