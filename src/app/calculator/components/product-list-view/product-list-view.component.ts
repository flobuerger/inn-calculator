import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription, } from 'rxjs';
import { Product } from '../../models/product.model';
import { CategoryStateService } from '../../services/states/category-state.service';
import { ProductStateService } from '../../services/states/product-state.service';
import { ProductAreaStateService } from '../../services/states/product-area-state.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'inn-calculator-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss'],
})
export class ProductListViewComponent implements OnInit, OnDestroy {
  productAreaStateService = inject(ProductAreaStateService);

  subscription = new Subscription();
  products: Product[];
  selectedProduct!: Product;
  category: Category;

  constructor(private categoryService: CategoryStateService,
    private productService: ProductStateService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription.add(
      this.categoryService.selectedCategoryTabId$.subscribe((selectedCategoryId) => {
        this.category = this.categoryService.getCategory(selectedCategoryId);
        this.products = this.productService.getProductsByCategory(selectedCategoryId);
      })
    );

  }

}
