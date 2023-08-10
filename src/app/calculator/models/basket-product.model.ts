import { Product } from "./product.model";

export interface BasketProduct {
  product: Product;
  count: number;
}
