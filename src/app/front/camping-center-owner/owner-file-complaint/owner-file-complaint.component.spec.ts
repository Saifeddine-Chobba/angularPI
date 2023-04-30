import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerFileComplaintComponent } from './owner-file-complaint.component';

describe('OwnerFileComplaintComponent', () => {
  let component: OwnerFileComplaintComponent;
  let fixture: ComponentFixture<OwnerFileComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerFileComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerFileComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
