import { Currency } from "../currency.model";

export interface BasketPriceState {
  priceAmount: number;
  currency: Currency;
}
