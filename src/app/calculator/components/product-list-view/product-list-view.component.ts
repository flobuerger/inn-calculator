import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductStateService } from '../../services/states/product-state.service';

@Component({
  selector: 'inn-calculator-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss'],
})
export class ProductListViewComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  products!: Product[];
  selectedProduct!: Product;

  constructor(private productService: ProductStateService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription.add(
      this.productService.products$.subscribe((products) => {
        this.products = products;
        console.log(products);
      })
    );
  }
}
