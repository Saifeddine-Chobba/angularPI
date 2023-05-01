import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeliveryLocationComponent } from './order-delivery-location.component';

describe('OrderDeliveryLocationComponent', () => {
  let component: OrderDeliveryLocationComponent;
  let fixture: ComponentFixture<OrderDeliveryLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDeliveryLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDeliveryLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
