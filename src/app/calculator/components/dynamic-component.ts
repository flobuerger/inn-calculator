import { Product } from "../models/product.model";

export interface DynamicComponent {
    product: Product | null;
}