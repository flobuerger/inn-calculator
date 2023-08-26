import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductArea } from '../../models/product-area.model';
import { ProductAreaStateService } from '../../services/states/product-area-state.service';
import { CategoryStateService } from '../../services/states/category-state.service';
import { ProductStateService } from '../../services/states/product-state.service';

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


  @Input() productAreaId?: number;
  @Input() categoryId: number;

  ngOnInit(): void {
    if (this.productAreaId) {
      this.productArea = this.productAreaService.getProductArea(this.productAreaId);
      this.products = this.productService.getProductsByCategoryAndProductArea(this.categoryId, this.productAreaId);
    } else {
      this.products = this.productService.getProductsByCategory(this.categoryId);
    }
  }
}
