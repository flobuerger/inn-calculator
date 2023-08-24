import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketProduct } from '../../models/basket-product.model';
import { BasketPriceService } from '../../services/basket-bill-price.service';
import { BasketStateService } from '../../services/states/basket-state.service';
import { UnitEnum } from '../../models/enums/unit.enum';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'inn-calculator-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.scss'],
})
export class BillViewComponent implements OnInit, OnDestroy {
  basketService = inject(BasketService);

  subscription = new Subscription();
  basketProducts: BasketProduct[];
  priceAmount = 0;
  currencyCode: string;
  hasItems = false;

  constructor(
    private basketStateService: BasketStateService,
    private basketPriceService: BasketPriceService
  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription.add(
      this.basketStateService.basketProducts$.subscribe((basketProducts) => {
        this.basketProducts = basketProducts;
        this.hasItems = this.basketProducts?.length > 0;
      })
    );

    this.subscription.add(
      this.basketPriceService.price$.subscribe((basketPrice) => {
        this.priceAmount = basketPrice.priceAmount;
        this.currencyCode = basketPrice.currencyCode;
      })
    );
  }

  checkout() {
    console.log("checkout");
    this.basketService.submit(this.basketProducts);
    this.basketStateService.reset();
    this.basketPriceService.reset();
  }

  removeItem(basketProduct: BasketProduct) {
    this.basketStateService.removeFromBasket(basketProduct.product);
  }

  getCorrectDecimal(amount: number) {
    return amount.toFixed(2)
  }
}
