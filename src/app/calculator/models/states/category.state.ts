import { Category } from "../category.model";

export interface CategoryStates {
  categories: Category[];
  selectedCategoryTabId: number;
}
