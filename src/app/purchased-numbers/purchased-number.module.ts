import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PurchasedNumberListComponent } from './purchased-number-list.component';
import { CreatePurchasedNumberComponent } from './create/create-purchased-number.component';
import { PurchasedNumberDetailComponent } from './purchased-number-detail.component';

@NgModule({
  declarations: [
    PurchasedNumberListComponent,
    PurchasedNumberDetailComponent,
    CreatePurchasedNumberComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'purchasedNumberList', component: PurchasedNumberListComponent },
      { path: 'createPurchasedNumber', component: CreatePurchasedNumberComponent }
    ])
  ],
  providers: []
})

export class PurchasedNumberModule { }
