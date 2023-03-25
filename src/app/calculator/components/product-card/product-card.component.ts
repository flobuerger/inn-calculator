import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { BasketPriceService } from '../../services/states/basket-price.service';
import { BasketStateService } from '../../services/states/basket-state.service';

@Component({
  selector: 'inn-calculator-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product;

  /**
   *
   */
  constructor(
    private basketService: BasketStateService,
    private basketPriceService: BasketPriceService
  ) {}

  addToBasket(product: Product): void {
    this.basketService.addToBasket(product);
    this.basketPriceService.add(product.price, product.currency);
  }
}
