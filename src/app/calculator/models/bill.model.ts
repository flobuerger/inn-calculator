import { Product } from "./product.model";

export interface Bill {
    id: string;
    billOn: Date;
    totalAmount: number;
    productCount: number;
    products: Product[];
}