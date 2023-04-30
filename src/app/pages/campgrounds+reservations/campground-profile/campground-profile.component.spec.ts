import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampgroundProfileComponent } from './campground-profile.component';

describe('CampgroundProfileComponent', () => {
  let component: CampgroundProfileComponent;
  let fixture: ComponentFixture<CampgroundProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampgroundProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampgroundProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
