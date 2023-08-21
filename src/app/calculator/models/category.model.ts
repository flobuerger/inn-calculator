import { Product } from "./product.model";

export interface Category {
    id: number;
    name: string;
    displayName: string;
    createdOn: Date;
    modifiedOn: Date;
}
