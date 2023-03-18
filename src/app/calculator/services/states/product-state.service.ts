import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { State } from 'src/app/services/state/state-model.service';
import { Product } from '../../models/product';
import { ProductStates } from '../../models/product-state';
import { ProductMockService } from '../product-mock.service';

@Injectable({
  providedIn: 'root',
})
export class ProductStateService extends State<ProductStates> {
  products$: Observable<Product[]> = this.select(
    (state) => state.products
  ).pipe(shareReplay({ refCount: true, bufferSize: 1 }));

  constructor(private mockService: ProductMockService) {
    super({
      products: [],
    });
  }

  setProduct(product: Product) {
    this.setState({ products: [...this.state.products, product] });
  }

  getProduct(id: string): Product {
    return this.state.products.filter((product) => product.id == id)[0];
  }

  setProducts(products: Product[]) {
    this.setState({ products: [...products] });
  }

  getProducts(): Product[] {
    return this.state.products;
  }
}
