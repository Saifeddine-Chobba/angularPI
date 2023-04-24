import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerMyAccountComponent } from './owner-my-account.component';

describe('OwnerMyAccountComponent', () => {
  let component: OwnerMyAccountComponent;
  let fixture: ComponentFixture<OwnerMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerMyAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
