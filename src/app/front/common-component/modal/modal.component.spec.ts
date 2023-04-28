import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFrontComponent } from './modal.component';

describe('ModalFrontComponent', () => {
  let component: ModalFrontComponent;
  let fixture: ComponentFixture<ModalFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
