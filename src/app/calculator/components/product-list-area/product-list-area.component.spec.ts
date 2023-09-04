import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListAreaComponent } from './product-list-area.component';

describe('ProductListAreaComponent', () => {
  let component: ProductListAreaComponent;
  let fixture: ComponentFixture<ProductListAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListAreaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
