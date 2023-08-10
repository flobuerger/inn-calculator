import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Category } from "src/app/calculator/models/category.model";
import { Product } from "src/app/calculator/models/product.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    #selectedCategory = new Subject<Category>();
    selectedCategory$ = this.#selectedCategory.asObservable();

    #products = new Subject<Product[]>();
    products$ = this.#products.asObservable();

    #categoryProducts = new Subject<Category[]>();
    categoryProducts$ = this.#categoryProducts.asObservable();

    setSelectedCategory(category: Category) {
        this.#selectedCategory.next(category);
        this.#products.next(category.products);
    }

    getProducts() {
        return this.products$;
    }
}