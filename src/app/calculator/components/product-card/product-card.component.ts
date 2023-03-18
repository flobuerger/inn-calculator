import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'inn-calculator-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product;
}
