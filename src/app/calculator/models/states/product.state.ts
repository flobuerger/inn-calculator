import { Product } from "../product.model";

export interface ProductStates {
  products: Product[];
  hasDiscountedCheckboxSelected: boolean;
}