import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductStateService } from '../services/states/product-state.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver {
  constructor(public productService: ProductStateService) {}
  resolve(): Product[] | Observable<Product[]> | Promise<Product[]> {
    console.log('resolver called');
    return this.productService.getProducts();
  }
}
