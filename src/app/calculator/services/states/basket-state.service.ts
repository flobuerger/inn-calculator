import { Injectable } from '@angular/core';
import { Observable, shareReplay, Subject } from 'rxjs';
import { State } from 'src/app/services/state/state-model.service';
import { Product } from '../../models/product';
import { BasketState } from '../../models/basket-product.state';
import { BasketProduct } from '../../models/basket-product';

@Injectable({
  providedIn: 'root',
})
export class BasketStateService extends State<BasketState> {
  basketProducts$: Observable<BasketState> = this.select((state) => state).pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );
  priceAmount = new Subject<number>();
  priceAmount$ = this.priceAmount.asObservable();

  constructor() {
    super({
      basketProducts: [],
    });
  }

  addToBasket(product: Product) {
    console.log('add product to basket: ' + product.name);

    const basketProductPos = this.state.basketProducts.findIndex(
      (q) => q.product.id == product.id
    );

    console.log('current basketPros: ' + basketProductPos);

    if (basketProductPos > -1) {
      const item = this.state.basketProducts[basketProductPos];
      item.count++;

      this.setState({ basketProducts: [...this.state.basketProducts] });
    } else {
      const basketProduct: BasketProduct = {
        product: product,
        count: 1,
      };
      this.setState({
        basketProducts: [...this.state.basketProducts, basketProduct],
      });
    }
  }

  removeFromBasket(product: Product) {
    const basketProductIndex = this.state.basketProducts.findIndex(q => q.product.id === product.id);
    console.log(basketProductIndex);
    const basketProduct = this.state.basketProducts[basketProductIndex];
    console.log(basketProduct.count);
    if (basketProduct.count > 1) {
      console.log("check");
      basketProduct.count -= 1;
      console.log(this.state);
      this.setState({ basketProducts: [...this.state.basketProducts] })
    } else {
      const newlist = this.state.basketProducts.filter(
        (q) => q.product.id != product.id
      );

      this.setState({ basketProducts: [...newlist] });
    }
  }

  getBasket(): BasketProduct[] {
    return this.state.basketProducts;
  }

  reset() {
    this.setState({ basketProducts: [] });
  }
}
