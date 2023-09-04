import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../../models/product.model";

@Injectable({ providedIn: 'root' })
export class ProductCheckoutService {
    selectedProduct = new Subject<Product | null>();
    selectedProduct$ = this.selectedProduct.asObservable();


    setSelectedProduct(product: Product | null) {
        this.selectedProduct.next(product);
    }
}