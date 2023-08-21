import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketProduct } from '../../models/basket-product.model';
import { BasketPriceService } from '../../services/states/basket-price.service';
import { BasketStateService } from '../../services/states/basket-state.service';
import { UnitEnum } from '../../models/enums/unit.enum';

@Component({
  selector: 'inn-calculator-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.scss'],
})
export class BillViewComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  basketProducts: BasketProduct[];
  priceAmount = 0;
  currencyCode: string;
  hasItems = false;

  constructor(
    private basketService: BasketStateService,
    private basketPriceService: BasketPriceService
  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription.add(
      this.basketService.basketProducts$.subscribe((basketProducts) => {
        this.basketProducts = basketProducts;
        this.hasItems = this.basketProducts?.length > 0;
      })
    );

    this.subscription.add(
      this.basketPriceService.price$.subscribe((basketPrice) => {
        this.priceAmount = basketPrice.priceAmount;
        this.currencyCode = basketPrice.currencyCode;
        console.log(JSON.stringify(this.priceAmount));
      })
    );
  }

  checkout() {
    this.basketService.reset();
    this.basketPriceService.reset();
  }

  removeItem(basketProduct: BasketProduct) {
    this.basketService.removeFromBasket(basketProduct.product);
  }

  getCorrectDecimal(amount: number) {
    return (Math.round(amount * 100) / 100).toFixed(2)
  }

  getUnitEnum(value: number) {
    return UnitEnum[value];
  }
}
