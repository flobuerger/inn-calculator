import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCheckoutViewComponent } from './product-checkout-view.component';

describe('ProductCheckoutViewComponent', () => {
  let component: ProductCheckoutViewComponent;
  let fixture: ComponentFixture<ProductCheckoutViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCheckoutViewComponent]
    });
    fixture = TestBed.createComponent(ProductCheckoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
