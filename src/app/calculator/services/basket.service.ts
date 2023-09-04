import { Injectable, inject } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { BasketProduct } from "../models/basket-product.model";
import { Subject } from "rxjs";
import { PawnReturn } from "./states/pawn-return.service";

@Injectable({
    providedIn: 'root'
})
export class BasketService {
    angularFireStore: AngularFirestore = inject(AngularFirestore);

    #dismissAllPawns = new Subject<boolean>();
    dismissAllPawns$ = this.#dismissAllPawns.asObservable();

    submit(basketProducts: BasketProduct[], pawnReturnItems: PawnReturn[] = []) {
        basketProducts.forEach((basketProduct) => {
            this.angularFireStore.collection('product_basket').add({
                createdOn: new Date(),
                fullProductPriceAmount: (basketProduct.amount * basketProduct.count),
                singleProductPriceAmount: basketProduct.amount,
                productCount: basketProduct.count,
                productId: basketProduct.product.id,
                productName: basketProduct.product.name,
                unitAmount: basketProduct.product.unitAmount,
                unit: basketProduct.unit,
                hasPawn: basketProduct.hasPawn,
            });
        });

        if (pawnReturnItems && pawnReturnItems.length > 0)
            this.angularFireStore.collection('pawn_basket').add({
                createdOn: new Date(),
                pawnReturnItemsCount: pawnReturnItems.length,
                pawnReturnPriceAmount: pawnReturnItems && pawnReturnItems.length > 0 ? ((-1) * pawnReturnItems[0].pawnAmount * pawnReturnItems.length) : 0
            });

    }

    toggleDismissPawns(dismissAllPawns: boolean) {
        this.#dismissAllPawns.next(!dismissAllPawns);
    }
}