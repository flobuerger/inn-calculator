import { ProductTypeEnum } from "./enums/productType.enum";
import { UnitEnum } from "./enums/unit.enum";

export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  createdOn: Date;
  modifiedOn: Date;
  sortOrder: number;
  productType: ProductTypeEnum;
  unit: UnitEnum;
  unitAmount: number;
  priceAmount: number;
  currencyCode: string;
  categoryId: number;
}
