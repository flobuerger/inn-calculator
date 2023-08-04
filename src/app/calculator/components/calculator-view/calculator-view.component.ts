import { Component, OnInit } from '@angular/core';
import { ProductMockService } from '../../services/product-mock.service';
import { Category } from '../../models/category';

@Component({
  selector: 'inn-calculator-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.scss'],
})
export class CalculatorViewComponent implements OnInit {
  categories: Category[] = [];

  constructor(private productMock: ProductMockService) {

  }
  ngOnInit(): void {
    this.categories = this.productMock.getCategories();
  }
}
