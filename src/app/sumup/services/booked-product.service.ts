import { Injectable, inject } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { BookedProductModel } from "../models/sumup-response.model";
import { Observable, filter, map, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookedProductService {
    firestore: Firestore = inject(Firestore);

    getBookedByDate(from: Date, to: Date): Observable<BookedProductModel[]> {
        const booked_products = collection(this.firestore, 'product_basket');

        return collectionData(booked_products).pipe(map((response => {
            const products = response.map((documentData) => {
                return {
                    productType: documentData["productType"],
                    productCount: documentData["productCount"],
                    productName: documentData["productName"],
                    unitAmount: documentData["unitAmount"],
                    unit: documentData["unit"],
                    bookedOn: new Date(documentData["createdOn"]),
                    fullProductPriceAmount: documentData["fullProductPriceAmount"]
                }
            })
            return this.combineProductUnits(products);
        }),
            filter((documentData: BookedProductModel) => documentData.bookedOn >= new Date(from) && documentData.bookedOn <= new Date(to))));


    };

    combineProductUnits(bookedProducts: BookedProductModel[]) {
        const bookedFilteredProducts: BookedProductModel[] = [];

        bookedProducts.forEach((bookedProduct) => {
            const productIndex = bookedFilteredProducts.findIndex((q) => q.productName === bookedProduct.productName
                && q.unitAmount === bookedProduct.unitAmount
                && q.unit === bookedProduct.unit);

            if (productIndex == 0) {
                const currentProduct = bookedFilteredProducts[productIndex];
                currentProduct.productCount = currentProduct.productCount + bookedProduct.productCount;
                currentProduct.fullProductPriceAmount = currentProduct.fullProductPriceAmount + bookedProduct.fullProductPriceAmount;

                bookedFilteredProducts[productIndex] = currentProduct;
            } else {
                bookedFilteredProducts.push(bookedProduct);
            }
        })


        return bookedFilteredProducts;
    }
}