import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCampgroundsComponent } from './user-campgrounds.component';

describe('UserCampgroundsComponent', () => {
  let component: UserCampgroundsComponent;
  let fixture: ComponentFixture<UserCampgroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCampgroundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCampgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
