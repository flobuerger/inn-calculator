import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/calculator/models/category.model';
import { Subscription } from 'rxjs';
import { CategoryStateService } from 'src/app/calculator/services/states/category-state.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'inn-calculator-tabs',
  templateUrl: './calculator-tabs.component.html',
  styleUrls: ['./calculator-tabs.component.css'],
})
export class CalculatorTabsComponent implements OnInit, OnDestroy {
  @ViewChild("iconContainer") public iconContainer: HTMLElement;
  categories: Category[];
  selectedCategoryId: number;

  subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(private categoryStateService: CategoryStateService, public sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.subscription.add(
      this.categoryStateService.selectedCategoryTabId$.subscribe((selectedCategoryId: number) => {
        this.selectedCategoryId = selectedCategoryId
      })
    )

    this.subscription.add(
      this.categoryStateService.categories$.subscribe((categories) => { this.categories = categories; })
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeTab(event: any) {
    if (event) {
      this.categoryStateService.setSelectedCategoryTabId(event.target.id as number);
    }
  }
}
