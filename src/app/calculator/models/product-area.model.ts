import { ProductAreaTypeEnum } from "./enums/product-area-type.enum";

export interface ProductArea {
    id: number;
    name: string;
    prodctAreaType: ProductAreaTypeEnum;
    createdOn: Date;
    modifiedOn: Date;
}