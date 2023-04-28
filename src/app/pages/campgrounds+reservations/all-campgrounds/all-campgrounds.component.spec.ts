import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCampgroundsComponent } from './all-campgrounds.component';

describe('AllCampgroundsComponent', () => {
  let component: AllCampgroundsComponent;
  let fixture: ComponentFixture<AllCampgroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCampgroundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCampgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
