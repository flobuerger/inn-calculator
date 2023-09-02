import { Injectable, inject } from "@angular/core";
import { DocumentData, Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable, map } from "rxjs";
import { Category } from "../models/category.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    firestore: Firestore = inject(Firestore);
    products$ = new Observable<DocumentData[]>

    getCategories(): Observable<Category[]> {
        const products = collection(this.firestore, 'category');

        return collectionData(products).pipe(map((response) => {
            return response.map((documentData) => {
                return {
                    id: documentData["id"],
                    name: documentData["name"],
                    displayName: documentData["displayName"],
                    createdOn: documentData["createdOn"],
                    modifiedOn: documentData["modifiedOn"],
                    productAreaIds: documentData["productAreaIds"],
                    icon: documentData["icon"]
                }
            })
        }));
    }
}