import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationProfileComponent } from './user-reservation-profile.component';

describe('UserReservationProfileComponent', () => {
  let component: UserReservationProfileComponent;
  let fixture: ComponentFixture<UserReservationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReservationProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReservationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
