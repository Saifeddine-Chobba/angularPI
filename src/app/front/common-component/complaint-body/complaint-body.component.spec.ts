import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintBodyComponent } from './complaint-body.component';

describe('ComplaintBodyComponent', () => {
  let component: ComplaintBodyComponent;
  let fixture: ComponentFixture<ComplaintBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
