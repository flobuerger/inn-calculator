import { ProductTypeEnum } from "src/app/calculator/models/enums/productType.enum";
import { UnitEnum } from "src/app/calculator/models/enums/unit.enum";

export interface BookedProductModel {
    productType: ProductTypeEnum,
    productCount: number;
    productName: string;
    unitAmount: number;
    unit: UnitEnum;
    bookedOn: Date;
    fullProductPriceAmount: number;
}