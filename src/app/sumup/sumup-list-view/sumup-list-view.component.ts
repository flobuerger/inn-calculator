import { Component, OnInit, inject } from '@angular/core';
import { BookedProductService } from '../services/booked-product.service';
import { Observable } from 'rxjs';
import { BookedProductModel } from '../models/sumup-response.model';

@Component({
  selector: 'sumup-list-view',
  templateUrl: './sumup-list-view.component.html',
  styleUrls: ['./sumup-list-view.component.scss'],
})
export class SumupListViewComponent implements OnInit {
  bookedProductService = inject(BookedProductService);

  bookedProducts: Observable<BookedProductModel[]>;
  bookedProductsFullAmount = 0;

  from: Date = new Date();
  until: Date = new Date();

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings() {
    this.bookedProductsFullAmount = 0;
    this.bookedProducts = this.bookedProductService.getBookedByDate(this.from, this.until);


    this.bookedProducts.subscribe((bookedProducts) => {
      bookedProducts.forEach((bookedProduct) => {
        this.bookedProductsFullAmount = this.bookedProductsFullAmount + bookedProduct.fullProductPriceAmount
      })
    })
  }

  setFrom(event: any) {
    this.from = new Date(event.target.value)
    console.log("from"); console.log(this.from);
    this.loadBookings();
  }

  setTo(event: any) {
    this.until = new Date(event.target.value)
    console.log("from"); console.log(this.from);
    this.loadBookings();
  }

  setToToday() {
    this.until = new Date(Date.now());
    this.from = new Date(Date.now());

    console.log("until"); console.log(this.until);

    console.log("from"); console.log(this.from);
  }
}
