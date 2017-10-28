import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerModule } from './customers/customer.module';
import { ContractorModule } from './contractors/contractor.module';
import { PurchasedNumberModule } from './purchased-numbers/purchased-number.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './shared/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: DashboardComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    CustomerModule,
    ContractorModule
    // PurchasedNumberModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
