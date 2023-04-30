import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductProfileComponent } from './user-product-profile.component';

describe('UserProductProfileComponent', () => {
  let component: UserProductProfileComponent;
  let fixture: ComponentFixture<UserProductProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
