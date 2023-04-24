import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplaintProfileComponent } from './user-complaint-profile.component';

describe('UserComplaintProfileComponent', () => {
  let component: UserComplaintProfileComponent;
  let fixture: ComponentFixture<UserComplaintProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComplaintProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComplaintProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
