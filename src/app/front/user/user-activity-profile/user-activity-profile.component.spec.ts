import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityProfileComponent } from './user-activity-profile.component';

describe('UserActivityProfileComponent', () => {
  let component: UserActivityProfileComponent;
  let fixture: ComponentFixture<UserActivityProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActivityProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActivityProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
