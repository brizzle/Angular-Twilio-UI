import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerModule } from './customers/customer.module';
import { ContractorModule } from './contractors/contractor.module';
import { TwilioMessageModule } from './responses/twilio-message.module';
//import { PurchasedNumberModule } from './purchased-numbers/purchased-number.module';
// import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: DashboardComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    CustomerModule,
    ContractorModule,
    TwilioMessageModule,
    HttpModule
    // ReactiveFormsModule
    //SharedModule
    // PurchasedNumberModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
