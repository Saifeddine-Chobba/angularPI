import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderProfileComponent } from './user-order-profile.component';

describe('UserOrderProfileComponent', () => {
  let component: UserOrderProfileComponent;
  let fixture: ComponentFixture<UserOrderProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrderProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
