import { Component, OnInit, inject } from '@angular/core';
import { BookedProductService } from '../services/booked-product.service';
import { Observable } from 'rxjs';
import { BookedProductModel } from '../models/sumup-response.model';

@Component({
  selector: 'sumup-list-view',
  templateUrl: './sumup-list-view.component.html',
  styleUrls: ['./sumup-list-view.component.css'],
})
export class SumupListViewComponent implements OnInit {
  bookedProductService = inject(BookedProductService);

  bookedProducts: Observable<BookedProductModel[]>;
  bookedProductsFullAmount = 0;
  ngOnInit(): void {
    this.bookedProducts = this.bookedProductService.getBookedByDate(new Date("01.0.1.2020"), new Date("10.10.2023"));
    this.bookedProducts.subscribe((bookedProducts) => {

      bookedProducts.forEach((bookedProduct) => {
        this.bookedProductsFullAmount = this.bookedProductsFullAmount + bookedProduct.fullProductPriceAmount
        console.log(this.bookedProductsFullAmount);
      })
    })
  }
}
