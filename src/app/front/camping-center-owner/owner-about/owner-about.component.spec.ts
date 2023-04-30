import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAboutComponent } from './owner-about.component';

describe('OwnerAboutComponent', () => {
  let component: OwnerAboutComponent;
  let fixture: ComponentFixture<OwnerAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
