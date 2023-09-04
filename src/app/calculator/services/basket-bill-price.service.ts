import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { State } from 'src/app/services/state/state-model.service';
import { BasketPriceState } from '../models/states/basket-price.state';
import { BasketProduct } from '../models/basket-product.model';
import { PawnReturn } from './states/pawn-return.service';



@Injectable({
  providedIn: 'root',
})
export class BasketPriceService extends State<BasketPriceState> {

  price$: Observable<BasketPriceState> = this.select((state) => state).pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  hasPawnItem$: Observable<boolean> = this.select((state) => state.hasPawnItem).pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  constructor() {
    super({ priceAmount: 0, currencyCode: "EUR", hasPawnItem: false });
  }

  add(price: number, currencyCode: string, hasPawn: boolean, pawnAmount: number) {
    const amount = hasPawn ? this.state.priceAmount + price + pawnAmount : this.state.priceAmount + price;
    this.setState({
      priceAmount: amount,
      currencyCode: currencyCode,
    });

    console.log("basket amount");
    console.log(amount);
  }

  changePawn(count: number, reducePawn: number, pawnAmount: number) {
    let amount = this.state.priceAmount;
    amount = reducePawn ? amount - (count * pawnAmount) : amount + (count * pawnAmount)
    this.setState({ priceAmount: amount });
  }

  hasPawnItem(basketProducts: BasketProduct[]) {
    let hasPawnItem = false;
    basketProducts.forEach((basketProduct) => {
      if (basketProduct.hasPawn)
        hasPawnItem = true
    });
    this.setState({ hasPawnItem: hasPawnItem })
  }

  reCaclulate(basketProducts: BasketProduct[], pawnReturns: PawnReturn[]) {
    let amount = 0;
    basketProducts.forEach((basketProduct) => {
      amount = amount + (basketProduct.amount * basketProduct.count) + (basketProduct.hasPawn ? (basketProduct.count * basketProduct.pawnAmount) : 0);
    });
    pawnReturns.forEach((pawnReturnItem) => {
      amount = amount + pawnReturnItem.pawnAmount;
    })
    this.setState({ priceAmount: amount })
  }

  getPawnAmount(basketProducts: BasketProduct[]) {
    let amount = 0;
    basketProducts.forEach((basketProduct) => {
      amount = amount + (basketProduct.hasPawn ? (basketProduct.count * basketProduct.pawnAmount) : 0);
    })

    return amount;
  }

  reset() {
    this.setState({ priceAmount: 0 });
  }
}
