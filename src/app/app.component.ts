import { Component, OnInit, inject } from '@angular/core';
import { CategoryStateService } from './calculator/services/states/category-state.service';
import { ProductStateService } from './calculator';
import { ProductService } from './calculator/services/product.service';
import { CategoryService } from './calculator/services/category.service';
import { ProductAreaService } from './calculator/services/product-area.service';
import { ProductAreaStateService } from './calculator/services/states/product-area-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'inn-calculator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  productAreaService = inject(ProductAreaService);
  productAreaStateService = inject(ProductAreaStateService);

  subscription = new Subscription();

  hasSpecialPrices = false;
  title = 'inn-calculator';

  constructor(private categoryService: CategoryService, private categoryStateService: CategoryStateService,
    private productStateService: ProductStateService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((catgeories) => {
      this.categoryStateService.setCategories(catgeories);
      this.categoryStateService.setSelectedCategoryTabId(0);
    })
    this.productService.getProducts().subscribe((products) => {
      this.productStateService.setProducts(products);
    });

    this.productAreaService.getProductAreas().subscribe((productAreas) => {
      this.productAreaStateService.setProductAreas(productAreas);
    })
  }

  setProductsByState() {
    this.productStateService.setHasDiscountedCheckboxSelected(this.hasSpecialPrices);
  }
}
