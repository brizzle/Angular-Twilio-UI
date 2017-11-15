import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerModule } from './customers/customer.module';
import { ContractorModule } from './contractors/contractor.module';
import { TwilioMessageModule } from './responses/twilio-message.module';
import { PurchasedNumbersModule } from './purchased-numbers/purchased-number.module';

/* Feature Modules */
import { UserModule } from './users/user.module';
import { SignUpModule } from './sign-up/sign-up.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    UserModule,
    CustomerModule,
    ContractorModule,
    TwilioMessageModule,
    SignUpModule,
    PurchasedNumbersModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
