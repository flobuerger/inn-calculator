import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { ProductMockService } from '../../services/product-mock.service';
import { Category } from '../../models/category.model';
import { Subscription } from 'rxjs';
import { ProductCheckoutDirective } from '../../directives/product-checkout.directive';
import { ProductCheckoutViewComponent } from '../product-checkout-view/product-checkout-view.component';
import { ProductListViewComponent } from '../product-list-view/product-list-view.component';
import { DynamicComponent } from '../dynamic-component';
import { ProductCheckoutService } from '../../services/states/product-checkout.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'inn-calculator-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.scss'],
})
export class CalculatorViewComponent implements OnInit {
  categories: Category[] = [];
  susbcription = new Subscription();
  selectedProduct: Product | null;

  @ViewChild(ProductCheckoutDirective, { static: true }) productCheckoutHost: ProductCheckoutDirective;


  private messages: { type: Type<DynamicComponent> }[] = [
    { type: ProductListViewComponent },
    { type: ProductCheckoutViewComponent }
  ];

  constructor(private productMock: ProductMockService, private productCheckoutService: ProductCheckoutService) {

  }

  private loadComponent(product: Product | null): void {
    const viewContainerRef = this.productCheckoutHost.viewContainerRef;
    viewContainerRef.clear();

    console.log(product == null);
    if (product == null) {
      viewContainerRef.createComponent<DynamicComponent>(this.messages[0].type);
    }
    else {
      const container = viewContainerRef.createComponent<DynamicComponent>(this.messages[1].type);
      container.instance.product = product;
    }
  }

  ngOnInit(): void {
    this.categories = this.productMock.getCategories();
    this.loadComponent(null);

    this.susbcription.add(this.productCheckoutService.selectedProduct$.subscribe((product) => { console.log("selected"); this.selectedProduct = product; this.loadComponent(product) }))
  }
}
