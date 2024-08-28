import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay, Subject } from 'rxjs';
import { State } from 'src/app/services/state/state-model.service';
import { BasketProduct } from '../../models/basket-product.model';
import { BasketState } from '../../models/states/basket-product.state';
import { Product } from '../../models/product.model';
import { BasketPriceService } from '../basket-bill-price.service';

@Injectable({
  providedIn: 'root',
})
export class BasketStateService extends State<BasketState> {
  basketProducts$: Observable<BasketProduct[]> = this.select((state) => state.basketProducts).pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );
  priceAmount = new Subject<number>();
  priceAmount$ = this.priceAmount.asObservable();

  basketPriceService = inject(BasketPriceService);

  constructor() {
    super({
      basketProducts: [],
    });
  }

  addToBasket(product: Product) {
    const basketProductPos = this.state.basketProducts.findIndex(
      (q) => q.product.id == product.id && q.amount === product.priceAmount
    );

    if (basketProductPos > -1) {
      const item = this.state.basketProducts[basketProductPos];
      item.count += 1;

      this.setState({ basketProducts: [...this.state.basketProducts] });
    } else {
      const newBasketProduct: BasketProduct = {
        product: product,
        count: 1,
        unit: product.unit,
        amount: product.priceAmount,
        showPawn: product.hasPawn,
        hasPawn: product.hasPawn,
        pawnAmount: product.pawnAmount,
        hasDiscountedPrice: product.hasDiscount
      };
      this.setState({
        basketProducts: [...this.state.basketProducts, newBasketProduct],
      });
    }
  }

  removeFromBasket(product: Product) {
    const basketProductIndex = this.state.basketProducts.findIndex(q => q.product.id === product.id);
    const basketProduct = this.state.basketProducts[basketProductIndex];
    if (basketProduct.count > 1) {
      basketProduct.count -= 1;
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

  changePawn(basketPtoduct: BasketProduct) {
    const basketProductIndex = this.state.basketProducts.findIndex(q => q.product.id === basketPtoduct.product.id);
    const basketProduct = this.state.basketProducts[basketProductIndex];
    if (basketProduct) {
      basketProduct.hasPawn = !basketProduct.hasPawn;
      this.setState({ basketProducts: [...this.state.basketProducts] })
    }
  }
}
