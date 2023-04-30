import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerActivityProfileComponent } from './owner-activity-profile.component';

describe('OwnerActivityProfileComponent', () => {
  let component: OwnerActivityProfileComponent;
  let fixture: ComponentFixture<OwnerActivityProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerActivityProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerActivityProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
