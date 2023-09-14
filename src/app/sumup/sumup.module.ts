import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumupListViewComponent } from './sumup-list-view/sumup-list-view.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [SumupListViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ]
})
export class SumupModule { }
