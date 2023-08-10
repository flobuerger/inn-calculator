import { Component, Input, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic-component';
import { Product } from '../../models/product.model';
import { UnitEnum } from '../../models/enums/unit.enum';
import { BasketStateService } from '../../services/states/basket-state.service';
import { ProductCheckoutService } from '../../services/states/product-checkout.service';
import { Unit } from '../../models/unit.model';
@Component({
  selector: 'inn-calculator-product-checkout-view',
  templateUrl: './product-checkout-view.component.html',
  styleUrls: ['./product-checkout-view.component.css']
})
export class ProductCheckoutViewComponent implements OnInit, DynamicComponent {
  @Input() product: Product;

  basket: { sort: number, unit: Unit, count: number }[] = [];

  constructor(private basketService: BasketStateService, private productCheckoutService: ProductCheckoutService) { }
  ngOnInit(): void {
    this.initBasket();
  }

  initBasket() {
    this.product.units.forEach((unit) => {
      this.basket.push({ sort: unit.sort, unit: unit, count: 0 });
    })
  }

  getUnitEnum(value: number) {
    return UnitEnum[value];
  }

  addProduct(sort: number) {
    const basketIndex = this.basket.findIndex(q => q.unit.sort == sort);
    this.basket[basketIndex].count += 1;
  }

  addToBasket() {
    //add to basket
  }

  getBasketCount(sort: number) {
    const basketIndex = this.basket.findIndex(q => q.unit.sort == sort);
    return this.basket[basketIndex].count;
  }
}
