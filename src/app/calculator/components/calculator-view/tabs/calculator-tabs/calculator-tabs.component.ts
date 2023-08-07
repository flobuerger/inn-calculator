import { Component, Input, OnDestroy } from '@angular/core';
import { Category } from 'src/app/calculator/models/category';
import { CategoryService } from '../services/calculator-tabs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'inn-calculator-tabs',
  templateUrl: './calculator-tabs.component.html',
  styleUrls: ['./calculator-tabs.component.css'],
})
export class CalculatorTabsComponent implements OnDestroy {
  @Input() categories: Category[];
  selectedTab: Category;

  subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(private calculatorTabService: CategoryService) {
    this.subscription.add(
      this.calculatorTabService.selectedCategory$.subscribe((selectedCategory) => {
        this.selectedTab = selectedCategory
      })
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeTab(event: any) {
    const category = this.categories.find(q => q.id == event.target.id);
    if (category)
      this.calculatorTabService.setSelectedCategory(category);
  }
}
