import { UnitEnum } from "./enums/unit.enum";
import { Product } from "./product.model";

export interface BasketProduct {
  product: Product;
  count: number;
  unit: UnitEnum
  amount: number;
}
