import { Injectable } from "@angular/core";
import { State } from "src/app/services/state/state-model.service";
import { ProductAreaStates } from "../../models/states/ProductAreaStates";
import { Observable, shareReplay } from "rxjs";
import { ProductArea } from "../../models/product-area.model";

@Injectable({
    providedIn: 'root',
})
export class ProductAreaStateService extends State<ProductAreaStates> {
    products$: Observable<ProductArea[]> = this.select(
        (state) => state.productAreas
    ).pipe(shareReplay({ refCount: true, bufferSize: 1 }));

    constructor() {
        super({ productAreas: [] })
    }

    setProductAreas(productAreas: ProductArea[]) {
        this.setState({ productAreas: productAreas })
    }

    getProductAreas(): ProductArea[] {
        return this.state.productAreas;
    }

    getProductArea(id: number) {
        return this.state.productAreas.filter(q => q.id === id)[0];
    }
}