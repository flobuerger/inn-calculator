import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, } from 'rxjs';
import { Product } from '../../models/product.model';
import { BasketStateService } from '../../services/states/basket-state.service';
import { BasketPriceService } from '../../services/states/basket-price.service';
import { UnitEnum } from '../../models/enums/unit.enum';
import { CategoryStateService } from '../../services/states/category-state.service';
import { ProductStateService } from '../../services/states/product-state.service';
import { BasketProduct } from '../../models/basket-product.model';

@Component({
  selector: 'inn-calculator-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss'],
})
export class ProductListViewComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  products: Product[];
  selectedProduct!: Product;

  basket: BasketProduct[] = [];

  constructor(private categoryService: CategoryStateService,
    private basketService: BasketStateService,
    private basketPriceService: BasketPriceService,
    private productService: ProductStateService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription.add(
      this.basketService.basketProducts$.subscribe((basketItems) => this.basket = basketItems)
    );

    this.subscription.add(
      this.categoryService.selectedCategoryTabId$.subscribe((selectedCategoryId) => {
        console.log(selectedCategoryId);
        this.products = this.productService.getProductsByCategory(selectedCategoryId);
        console.log(this.products);
      })
    );
  }

  getUnitEnumText(unit: UnitEnum) {
    return UnitEnum[unit];
  }

  addToBasket(product: Product) {
    this.basketService.addToBasket(product);
    this.basketPriceService.add(product.priceAmount, product.currencyCode);
  }

  getBasketCount(id: number) {
    if (this.basket) {
      const basketIndex = this.basket.findIndex(q => q.product != null && q.product.id == id);
      if (basketIndex > -1)
        return this.basket[basketIndex].count;
    }
    return 0;
  }

}
