import { Component, Input, OnInit, inject } from '@angular/core';
import { BasketStateService } from '../../services/states/basket-state.service';
import { BasketPriceService } from '../../services/basket-bill-price.service';
import { Subscription } from 'rxjs';
import { BasketProduct } from '../../models/basket-product.model';
import { Product } from '../../models/product.model';
import { ProductStateService } from '../../services/states/product-state.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];

  basketService = inject(BasketStateService);
  basketPriceService = inject(BasketPriceService);

  productStateService = inject(ProductStateService);

  subscription = new Subscription();

  basket: BasketProduct[] = [];

  hasSepcialPricesSelected: boolean;

  ngOnInit(): void {
    this.subscription.add(
      this.basketService.basketProducts$.subscribe((basketItems) => { this.basket = basketItems; })
    );

    this.subscription.add(this.productStateService.hasDiscountedCheckboxSelected$.subscribe((hasSepcialPricesSelected) => this.hasSepcialPricesSelected = hasSepcialPricesSelected));
  }

  addToBasket(product: Product) {
    const price = this.hasSepcialPricesSelected === true ? product.hasDiscount && product.discountPrice ? product.discountPrice : product.priceAmount : product.priceAmount;
    const pawnAmount = this.hasSepcialPricesSelected === true ? 0 : product.pawnAmount;

    product.priceAmount = price;
    product.pawnAmount = pawnAmount;

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
