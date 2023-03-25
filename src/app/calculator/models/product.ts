export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  createdOn: Date;
  modifiedOn: Date;
  sortOrder: number;
  price: number;
  currency: string;
  type: ProductType;
  amount: number;
  unit: string;
}

export enum ProductType {
  'DRINK' = 0,
  'FOOD' = 1,
}
