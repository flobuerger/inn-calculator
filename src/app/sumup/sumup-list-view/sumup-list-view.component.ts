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

  from: any;
  until: any;

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
    this.from = event.target.value
    console.log("from"); console.log(this.from);
    this.loadBookings();
  }

  setTo(event: any) {
    this.until = event.target.value
    console.log("until"); console.log(this.until);
    this.loadBookings();
  }

  setToToday() {
    this.until = new Date().toISOString().substring(0, 10);
    this.from = new Date().toISOString().substring(0, 10);

    console.log("until"); console.log(this.until);

    console.log("from"); console.log(this.from);

    this.loadBookings();
  }
}
