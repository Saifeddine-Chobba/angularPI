import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFileComplaintComponent } from './user-file-complaint.component';

describe('UserFileComplaintComponent', () => {
  let component: UserFileComplaintComponent;
  let fixture: ComponentFixture<UserFileComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFileComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFileComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
