import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductProfileBackComponent } from './product-profile-back.component';

describe('ProductProfileBackComponent', () => {
  let component: ProductProfileBackComponent;
  let fixture: ComponentFixture<ProductProfileBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductProfileBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductProfileBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
