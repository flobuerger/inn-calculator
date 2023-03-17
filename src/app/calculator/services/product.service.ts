import { Inject } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Product } from "../models/product";

@Inject({
    providedIn: 'root'
})
export class ProductService{
    products: Product[];
    products$: Observable<Product[]>;

    
}