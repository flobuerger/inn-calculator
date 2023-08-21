import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { State } from 'src/app/services/state/state-model.service';
import { ProductMockService } from '../product-mock.service';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { CategoryStates } from '../../models/states/category.state';

@Injectable({
    providedIn: 'root',
})
export class CategoryStateService extends State<CategoryStates> {
    categories$: Observable<Category[]> = this.select(
        (state) => state.categories
    ).pipe(shareReplay({ refCount: true, bufferSize: 1 }));
    selectedCategoryTabId$: Observable<number> = this.select(
        (state) => state.selectedCategoryTabId
    ).pipe(shareReplay({ refCount: true, bufferSize: 1 }));

    constructor(private mockService: ProductMockService) {
        super({
            categories: [],
            selectedCategoryTabId: 0
        });
    }

    addCategory(category: Category) {
        this.setState({ categories: [...this.state.categories, category] });
    }

    setCategories(categories: Category[]) {
        this.setState({ categories: categories });
    }

    getCategory(id: number): Category {
        return this.state.categories.filter((category) => category.id == id)[0];
    }

    setSelectedCategoryTabId(selectedTabId: number) {
        this.setState({ selectedCategoryTabId: selectedTabId });
    }

    getSelectedCategoryTabId(): number {
        return this.state.selectedCategoryTabId;
    }
}
