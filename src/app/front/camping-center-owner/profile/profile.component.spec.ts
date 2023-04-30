import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: OwnerProfileComponent;
  let fixture: ComponentFixture<OwnerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
