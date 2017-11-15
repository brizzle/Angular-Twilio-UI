import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PurchasedNumbersComponent } from './purchased-numbers.component';

const ROUTES = [
  {
    path: "purchasedNumbers",
    component: PurchasedNumbersComponent
  }
];

@NgModule({
  declarations: [ PurchasedNumbersComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: []
})
export class PurchasedNumbersModule { }
