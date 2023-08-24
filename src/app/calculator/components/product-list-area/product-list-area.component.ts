import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductArea } from '../../models/product-area.model';
import { ProductAreaStateService } from '../../services/states/product-area-state.service';
import { CategoryStateService } from '../../services/states/category-state.service';
import { ProductStateService } from '../../services/states/product-state.service';
import { BasketPriceService } from '../../services/basket-bill-price.service';
import { BasketStateService } from '../../services/states/basket-state.service';
import { BasketProduct } from '../../models/basket-product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'product-list-area',
  templateUrl: './product-list-area.component.html',
  styleUrls: ['./product-list-area.component.scss'],
})
export class ProductListAreaComponent implements OnInit {
  products: Product[];
  productArea: ProductArea;

  productAreaService = inject(ProductAreaStateService);
  categoryService = inject(CategoryStateService);
  productService = inject(ProductStateService);
  basketService = inject(BasketStateService);
  basketPriceService = inject(BasketPriceService);

  subscription = new Subscription();

  basket: BasketProduct[] = [];

  @Input() productAreaId?: number;
  @Input() categoryId: number;

  ngOnInit(): void {
    if (this.productAreaId) {
      this.productArea = this.productAreaService.getProductArea(this.productAreaId);
      this.products = this.productService.getProductsByCategoryAndProductArea(this.categoryId, this.productAreaId);
    } else {
      this.products = this.productService.getProductsByCategory(this.categoryId);
    }
    this.subscription.add(
      this.basketService.basketProducts$.subscribe((basketItems) => this.basket = basketItems)
    );
  }

  addToBasket(product: Product) {
    this.basketService.addToBasket(product);
    this.basketPriceService.add(product.priceAmount, product.currencyCode);
  }

  getBasketCount(id: number) {
    if (this.basket) {
      const basketIndex = this.basket.findIndex(q => q.product != null && q.product.id == id);
      if (basketIndex > -1)
        return this.basket[basketIndex].count;
    }
    return 0;
  }
}
