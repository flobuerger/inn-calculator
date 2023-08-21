import { Component, OnInit } from '@angular/core';
import { ProductMockService } from './calculator/services/product-mock.service';
import { CategoryStateService } from './calculator/services/states/category-state.service';
import { ProductStateService } from './calculator';

@Component({
  selector: 'inn-calculator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private mockService: ProductMockService, private categoryService: CategoryStateService,
    private productService: ProductStateService) { }

  ngOnInit(): void {
    const allCategories = this.mockService.getCategories();
    const allProducts = this.mockService.getProducts();

    console.log("allCategories");
    console.log(allCategories);
    console.log("allProducts");
    console.log(allProducts);

    this.categoryService.setCategories(allCategories);
    this.productService.setProducts(allProducts);
  }
  title = 'inn-calculator';
}
