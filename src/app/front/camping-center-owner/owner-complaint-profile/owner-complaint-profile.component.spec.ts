import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerComplaintProfileComponent } from './owner-complaint-profile.component';

describe('OwnerComplaintProfileComponent', () => {
  let component: OwnerComplaintProfileComponent;
  let fixture: ComponentFixture<OwnerComplaintProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerComplaintProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerComplaintProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
