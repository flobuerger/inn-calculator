import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';

import { RouterModule, Routes } from '@angular/router';
import { CalculatorViewComponent } from './components/calculator-view/calculator-view.component';
import { BillViewComponent } from './components/bill-view/bill-view.component';
import { CalculatorTabsComponent } from './components/calculator-view/tabs/calculator-tabs/calculator-tabs.component';
import { ProductListAreaComponent } from './components/product-list-area/product-list-area.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: CalculatorViewComponent
  }
];

@NgModule({
  declarations: [
    ProductListViewComponent,
    CalculatorViewComponent,
    BillViewComponent,
    CalculatorTabsComponent,
    ProductListAreaComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES, { paramsInheritanceStrategy: 'always' }),
  ],
})
export class CalculatorModule { }
