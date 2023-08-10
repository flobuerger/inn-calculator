import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { BasketStateService } from '../../services/states/basket-state.service';
import { BasketPriceService } from '../../services/states/basket-price.service';
import { ProductCheckoutService } from '../../services/states/product-checkout.service';
import { DynamicComponent } from '../dynamic-component';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'inn-calculator-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss'],
})
export class ProductListViewComponent implements OnInit, OnDestroy, DynamicComponent {
  @Input() product: Product;

  subscription = new Subscription();
  products!: Observable<Product[]>;
  productList: Product[];
  selectedProduct!: Product;

  constructor(private categoryService: CategoryService,
    private basketService: BasketStateService,
    private basketPriceService: BasketPriceService,
    private productCheckoutService: ProductCheckoutService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.categoryService.getProducts().subscribe((products) => {
      this.productList = products;
    });
    console.log("init");
  }

  addToBasket(product: Product): void {
    this.basketService.addToBasket(product);
    this.basketPriceService.add(product.price.amount, product.price.currency);
  }

  goToType(product: Product) {
    this.productCheckoutService.setSelectedProduct(product);
  }

}
