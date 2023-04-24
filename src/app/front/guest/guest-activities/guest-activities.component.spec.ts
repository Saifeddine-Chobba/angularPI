import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestActivitiesComponent } from './guest-activities.component';

describe('GuestActivitiesComponent', () => {
  let component: GuestActivitiesComponent;
  let fixture: ComponentFixture<GuestActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
