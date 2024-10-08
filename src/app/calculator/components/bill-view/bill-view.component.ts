import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketProduct } from '../../models/basket-product.model';
import { BasketPriceService } from '../../services/basket-bill-price.service';
import { BasketStateService } from '../../services/states/basket-state.service';
import { BasketService } from '../../services/basket.service';
import { PawnReturn, PawnReturnService } from '../../services/states/pawn-return.service';
import { ProductStateService } from '../../services/states/product-state.service';

@Component({
  selector: 'inn-calculator-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.scss'],
})
export class BillViewComponent implements OnInit, OnDestroy {
  pawnReturnService = inject(PawnReturnService);

  basketService = inject(BasketService);
  productStateService = inject(ProductStateService);

  subscription = new Subscription();
  basketProducts: BasketProduct[];
  priceAmount = 0;
  currencyCode: string;
  hasItems = false;

  hasSepcialPricesSelected: boolean;

  hasPawnItem = false;
  pawnAmount: number;
  dismissAllPawns = false;
  pawnReturnItems: PawnReturn[];
  pawnReturnAmount = 0;
  pawnReturnCurrency = "EUR";

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
        this.pawnAmount = this.basketPriceService.getPawnAmount(this.basketProducts, this.hasSepcialPricesSelected);
      })
    );

    this.subscription.add(
      this.basketPriceService.hasPawnItem$.subscribe((hasPawnItem) => this.hasPawnItem = hasPawnItem)
    )

    this.subscription.add(
      this.basketPriceService.price$.subscribe((basketPrice) => {
        this.priceAmount = basketPrice.priceAmount;
        this.currencyCode = basketPrice.currencyCode;
      })
    );

    this.subscription.add(
      this.basketService.dismissAllPawns$.subscribe((dismissAllPawns) => {
        this.dismissAllPawns = dismissAllPawns;
        this.basketProducts.forEach((basketProduct) => this.changePawn(basketProduct));
      })
    )

    this.subscription.add(
      this.pawnReturnService.pawnReturns$.subscribe((pawnReturnItems) => {
        this.pawnReturnItems = pawnReturnItems;

        this.setPawnReturnAmount(pawnReturnItems);
      })
    )

    this.subscription.add(this.productStateService.hasDiscountedCheckboxSelected$.subscribe((hasSepcialPricesSelected) => {
      this.hasSepcialPricesSelected = hasSepcialPricesSelected;
      if (this.hasSepcialPricesSelected == true) {
        this.dismissAllPawns = true;
      } else {
        this.dismissAllPawns = false;
      }
      this.basketStateService.reset();
      this.basketPriceService.reset();
    }));
  }

  setPawnReturnAmount(pawnReturns: PawnReturn[]) {
    this.pawnReturnAmount = 0;
    pawnReturns.forEach((pawnReturn) => { this.pawnReturnAmount = this.pawnReturnAmount + pawnReturn.pawnAmount })
  }

  addPawnReturn() {
    this.pawnReturnService.addPawnReturn({ count: 1, pawnAmount: -1 });
    this.basketPriceService.add(-1, "EUR", false, 0)
  }

  removePawnReturn() {
    this.pawnReturnService.removePawnReturn();
    this.basketPriceService.reCaclulate(this.basketProducts, this.pawnReturnItems);
  }

  checkout() {
    this.basketService.submit(this.basketProducts, this.pawnReturnItems);
    this.reset();
  }

  reset() {
    this.basketStateService.reset();
    this.basketPriceService.reset();
  }

  removeItem(basketProduct: BasketProduct) {
    this.basketStateService.removeFromBasket(basketProduct.product);
    this.basketPriceService.reCaclulate(this.basketProducts, this.pawnReturnItems);
    this.basketPriceService.hasPawnItem(this.basketProducts);
  }

  getCorrectDecimal(amount: number, pawnAmount = 0, hasPawn = false) {
    amount = hasPawn ? amount + pawnAmount : amount;
    return amount.toFixed(2)
  }

  changePawn(basketProduct: BasketProduct) {
    this.basketStateService.changePawn(basketProduct);
    this.basketProducts = this.basketStateService.getBasket();

    this.basketPriceService.reCaclulate(this.basketProducts, this.pawnReturnItems);
    this.pawnAmount = this.basketPriceService.getPawnAmount(this.basketProducts, this.hasSepcialPricesSelected);
  }

  toggleDismissPawns() {
    this.basketService.toggleDismissPawns(this.dismissAllPawns);
    this.pawnAmount = this.basketPriceService.getPawnAmount(this.basketProducts, this.hasSepcialPricesSelected);
  }

  checkAndGetSpecialPrice(basketProduct: BasketProduct): number {
    if (this.hasSepcialPricesSelected) {
      return basketProduct.product.hasDiscount && basketProduct.product.discountPrice ? basketProduct.product.discountPrice : basketProduct.amount;
    } else {
      return basketProduct.amount;
    }
  }

  checkAndGetSpecialPawn(basketProduct: BasketProduct): number {
    if (this.hasSepcialPricesSelected)
      return 0;
    else
      return basketProduct.pawnAmount;
  }
}
