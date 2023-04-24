import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCampgroundProfileComponent } from './user-campground-profile.component';

describe('UserCampgroundProfileComponent', () => {
  let component: UserCampgroundProfileComponent;
  let fixture: ComponentFixture<UserCampgroundProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCampgroundProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCampgroundProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
