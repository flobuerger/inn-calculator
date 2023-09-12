import { Route } from '@angular/router';
import { SumupListViewComponent } from './sumup/sumup-list-view/sumup-list-view.component';
import { ProductListViewComponent } from './calculator/components/product-list-view/product-list-view.component';

export const appRoutes: Route[] = [{
    path: "",
    component: ProductListViewComponent
}, {
    path: "sumup",
    component: SumupListViewComponent
}];
