import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { CategoryService } from '../calculator-view/tabs/services/calculator-tabs.service';

@Component({
  selector: 'inn-calculator-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss'],
})
export class ProductListViewComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  products!: Product[];
  selectedProduct!: Product;

  constructor(private categoryService: CategoryService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription.add(
      this.categoryService.products$.subscribe((products) => {
        console.log(products);
        this.products = products;
        console.log(products);
      })
    );
  }
}
