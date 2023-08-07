import { Product } from "./product";

export interface Category {
    id: number;
    name: string;
    displayName: string;
    products: Product[];
}