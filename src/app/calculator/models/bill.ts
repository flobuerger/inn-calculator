import { Product } from "./product";

export interface Bill{
    id:string;
    billOn:Date;
    totalAmount:number;
    productCount:number;
    products:Product[];
}