import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';

import { RouterModule, Routes } from '@angular/router';
import { CalculatorViewComponent } from './components/calculator-view/calculator-view.component';
import { BillViewComponent } from './components/bill-view/bill-view.component';
import { ProductResolver } from './resolvers/product.resolver';
import { ProductCardComponent } from './components/product-card/product-card.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: CalculatorViewComponent,
    resolve: { product: () => inject(ProductResolver).resolve() },
  },
];

@NgModule({
  declarations: [
    ProductListViewComponent,
    CalculatorViewComponent,
    BillViewComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES, { paramsInheritanceStrategy: 'always' }),
  ],
})
export class CalculatorModule {}
