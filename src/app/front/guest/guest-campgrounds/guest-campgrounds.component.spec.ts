import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCampgroundsComponent } from './guest-campgrounds.component';

describe('GuestCampgroundsComponent', () => {
  let component: GuestCampgroundsComponent;
  let fixture: ComponentFixture<GuestCampgroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestCampgroundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestCampgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
