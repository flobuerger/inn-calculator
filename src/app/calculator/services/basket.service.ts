import { Injectable, inject } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { BasketProduct } from "../models/basket-product.model";

@Injectable({
    providedIn: 'root'
})
export class BasketService {
    angularFireStore: AngularFirestore = inject(AngularFirestore);

    submit(basketProducts: BasketProduct[]) {
        console.log(basketProducts);
        basketProducts.forEach((basketProduct) => {
            this.angularFireStore.collection('basket').add({
                createdOn: new Date(),
                fullProductPriceAmount: (basketProduct.amount * basketProduct.count),
                singleProductPriceAmount: basketProduct.amount,
                productCount: basketProduct.count,
                productId: basketProduct.product.id,
                productName: basketProduct.product.name,
                unitAmount: basketProduct.product.unitAmount,
                unit: basketProduct.unit
            })
                .then((res: any) => {
                    console.log("response");
                    console.log(res);
                })
                .catch((e: any) => {
                    console.log("error");
                    console.log(e);
                })
        })

    }
}