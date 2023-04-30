import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerTermsComponent } from './owner-terms.component';

describe('OwnerTermsComponent', () => {
  let component: OwnerTermsComponent;
  let fixture: ComponentFixture<OwnerTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
