import { Injectable, inject } from "@angular/core";
import { DocumentData, Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable, map } from "rxjs";
import { ProductArea } from "../models/product-area.model";
import { ProductAreaTypeEnum } from "../models/enums/product-area-type.enum";

@Injectable({
    providedIn: 'root'
})
export class ProductAreaService {
    firestore: Firestore = inject(Firestore);
    products$ = new Observable<DocumentData[]>

    getProductAreas(): Observable<ProductArea[]> {
        const products = collection(this.firestore, 'productArea');

        return collectionData(products).pipe(map((response) => {
            return response.map((documentData) => {
                return {
                    id: documentData["id"],
                    name: documentData["name"],
                    prodctAreaType: documentData["displayName"] as ProductAreaTypeEnum,
                    createdOn: documentData["createdOn"],
                    modifiedOn: documentData["modifiedOn"]
                }
            })
        }));
    }
}