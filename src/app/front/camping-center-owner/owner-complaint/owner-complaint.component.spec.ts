import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerComplaintComponent } from './owner-complaint.component';

describe('OwnerComplaintComponent', () => {
  let component: OwnerComplaintComponent;
  let fixture: ComponentFixture<OwnerComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
