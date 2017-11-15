import { Component, OnInit } from '@angular/core';
import { IPurchasedNumber } from './purchasedNumber';

@Component({
    selector: 'app-purchased-numbers',
    templateUrl: './purchased-numbers.component.html',
    styleUrls: ['./purchased-numbers.component.css']
})

export class PurchasedNumbersComponent implements OnInit {
  pageTitle: string = 'Purchased Numbers';

  constructor() {}

  ngOnInit(): void {

  }
}