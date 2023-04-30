import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestTermsComponent } from './guest-terms.component';

describe('GuestTermsComponent', () => {
  let component: GuestTermsComponent;
  let fixture: ComponentFixture<GuestTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
