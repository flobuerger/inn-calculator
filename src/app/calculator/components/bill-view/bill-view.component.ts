import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketProduct } from '../../models/basket-product';
import { BasketPriceService } from '../../services/states/basket-price.service';
import { BasketStateService } from '../../services/states/basket-state.service';

@Component({
  selector: 'inn-calculator-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.scss'],
})
export class BillViewComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  basketProducts: BasketProduct[];
  priceAmount = 0;
  currency: string;

  constructor(
    private basketService: BasketStateService,
    private basketPriceService: BasketPriceService
  ) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.subscription.add(
      this.basketService.basketProducts$.subscribe((basketProducts) => {
        this.basketProducts = basketProducts.basketProducts;
        console.log(this.basketProducts);
      })
    );

    this.subscription.add(
      this.basketPriceService.price$.subscribe((basketPrice) => {
        this.priceAmount = basketPrice.priceAmount;
        this.currency = basketPrice.currency;
        console.log(JSON.stringify(this.priceAmount));
      })
    );
  }

  checkout() {
    this.basketService.reset();
    this.basketPriceService.reset();
  }
}
