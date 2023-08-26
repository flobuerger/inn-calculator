import { Injectable, inject } from "@angular/core";
import { DocumentData, Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable, map } from "rxjs";
import { Product } from "../models/product.model";
import { UnitEnum } from "../models/enums/unit.enum";
import { ProductTypeEnum } from "../models/enums/productType.enum";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    firestore: Firestore = inject(Firestore);
    products$ = new Observable<DocumentData[]>

    getProducts(): Observable<Product[]> {
        const products = collection(this.firestore, 'product');

        return collectionData(products).pipe(map((response) => {
            return response.map((documentData) => {
                return {
                    id: documentData["id"],
                    name: documentData["name"],
                    shortDescription: documentData["shortDescription"],
                    createdOn: documentData["createdOn"],
                    modifiedOn: documentData["modifiedOn"],
                    sortOrder: documentData["sortOrder"],
                    productType: documentData["productType"] as ProductTypeEnum,
                    unit: documentData["unit"] as UnitEnum,
                    unitAmount: documentData["unitAmount"],
                    priceAmount: documentData["priceAmount"],
                    currencyCode: documentData["currencyCode"],
                    categoryId: documentData["categoryId"],
                    productAreaId: documentData["productAreaId"],
                    hasPawn: documentData["hasPawn"],
                    pawnAmount: documentData["pawnAmount"]
                }
            })
        }));
    }
}