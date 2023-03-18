import { Component, OnInit } from '@angular/core';
import { ProductStateService } from './calculator';
import { ProductMockService } from './calculator/services/product-mock.service';

@Component({
  selector: 'inn-calculator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'inn-calculator';
  constructor(
    private mockService: ProductMockService,
    private productService: ProductStateService
  ) {}
  ngOnInit(): void {
    const mocks = this.mockService.getProducts();

    this.productService.setProducts(mocks);
  }
}
