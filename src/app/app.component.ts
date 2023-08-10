import { Component, OnInit } from '@angular/core';
import { ProductMockService } from './calculator/services/product-mock.service';
import { CategoryService } from './calculator/services/category.service';

@Component({
  selector: 'inn-calculator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'inn-calculator';
  constructor(
    private mockService: ProductMockService,
    private categoryService: CategoryService,
  ) { }
  ngOnInit(): void {
    const mocks = this.mockService.getCategories();

    this.categoryService.setSelectedCategory(mocks[0]);
  }
}
