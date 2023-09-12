import { Injectable, inject } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { BookedProductModel } from "../models/sumup-response.model";
import { Observable, filter, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookedProductService {
    firestore: Firestore = inject(Firestore);

    getBookedByDate(from: Date, to: Date): Observable<BookedProductModel[]> {
        const booked_products = collection(this.firestore, 'product_basket');

        return collectionData(booked_products).pipe(map((response => {
            return response.map((documentData) => {
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
        }),
            filter((documentData: BookedProductModel) => documentData.bookedOn >= new Date(from) && documentData.bookedOn <= new Date(to))))
    };
}