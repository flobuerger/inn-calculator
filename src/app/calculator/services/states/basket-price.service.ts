import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { State } from 'src/app/services/state/state-model.service';
import { BasketPriceState } from '../../models/states/basket-price.state';
import { Currency } from '../../models/currency.model';

@Injectable({
  providedIn: 'root',
})
export class BasketPriceService extends State<BasketPriceState> {
  price$: Observable<BasketPriceState> = this.select((state) => state).pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  constructor() {
    super({ priceAmount: 0, currency: { currencyCode: "EUR", id: 0, name: "Euro", displayName: "Euro" } });
  }

  add(price: number, currency: Currency = { currencyCode: "EUR", id: 0, name: "Euro", displayName: "Euro" }) {
    this.setState({
      priceAmount: this.state.priceAmount + price,
      currency: currency,
    });
  }

  reset() {
    this.setState({ priceAmount: 0 });
  }
}
