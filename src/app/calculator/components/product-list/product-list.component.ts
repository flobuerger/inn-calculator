import { Component, Input, OnInit, inject } from '@angular/core';
import { BasketStateService } from '../../services/states/basket-state.service';
import { BasketPriceService } from '../../services/basket-bill-price.service';
import { Subscription } from 'rxjs';
import { BasketProduct } from '../../models/basket-product.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];

  basketService = inject(BasketStateService);
  basketPriceService = inject(BasketPriceService);

  subscription = new Subscription();

  basket: BasketProduct[] = [];

  ngOnInit(): void {
    this.subscription.add(
      this.basketService.basketProducts$.subscribe((basketItems) => { this.basket = basketItems; })
    );
  }

  addToBasket(product: Product) {
    this.basketService.addToBasket(product);
    this.basketPriceService.add(product.priceAmount, product.currencyCode, product.hasPawn, product.pawnAmount);
    this.basketPriceService.hasPawnItem(this.basket);
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
