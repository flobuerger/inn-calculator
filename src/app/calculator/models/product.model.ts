import { Price } from "./price.model";
import { ProductTypeEnum } from "./enums/productType.enum";
import { Unit } from "./unit.model";

export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  createdOn: Date;
  modifiedOn: Date;
  sortOrder: number;
  productType: ProductTypeEnum;
  units: Unit[];
  price: Price;
}
