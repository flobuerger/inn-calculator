import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { State } from 'src/app/services/state/state-model.service';
import { ProductStates } from '../../models/states/product.state';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductStateService extends State<ProductStates> {
  products$: Observable<Product[]> = this.select(
    (state) => state.products
  ).pipe(shareReplay({ refCount: true, bufferSize: 1 }));

  hasDiscountedCheckboxSelected$: Observable<boolean> = this.select(
    (state) => state.hasDiscountedCheckboxSelected
  ).pipe(shareReplay({ refCount: true, bufferSize: 1 }));

  constructor() {
    super({
      products: [],
      hasDiscountedCheckboxSelected: false
    });
  }

  setProduct(product: Product) {
    this.setState({ products: [...this.state.products, product] });
  }

  getProduct(id: number): Product {
    return this.state.products.filter((product) => product.id == id)[0];
  }

  setProducts(products: Product[]) {
    this.setState({ products: [...products] });
  }

  getProducts(): Product[] {
    return this.state.products.sort((a: Product, b: Product) => a.sortOrder - b.sortOrder);
  }

  getProductsByCategory(categoryId: number) {
    return this.state.products.filter(q => q.categoryId == categoryId).sort((a: Product, b: Product) => a.sortOrder - b.sortOrder);
  }

  getProductsByCategoryAndProductArea(categoryId: number, productAreaId: number) {
    return this.state.products.filter(q => q.categoryId == categoryId && q.productAreaId == productAreaId).sort((a: Product, b: Product) => a.sortOrder - b.sortOrder);
  }

  setHasDiscountedCheckboxSelected(state: boolean) {
    this.setState({ hasDiscountedCheckboxSelected: state });
  }
}
