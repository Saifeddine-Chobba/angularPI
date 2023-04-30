import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintProfileComponent } from './complaint-profile.component';

describe('ComplaintProfileComponent', () => {
  let component: ComplaintProfileComponent;
  let fixture: ComponentFixture<ComplaintProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
