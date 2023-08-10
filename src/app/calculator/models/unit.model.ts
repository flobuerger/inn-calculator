import { UnitEnum } from "./enums/unit.enum";

export interface Unit {
    sort: number;
    amount: number;
    unit: UnitEnum;
}