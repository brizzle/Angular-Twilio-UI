import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AuthGuard } from "../users/auth-guard.service";
import { CustomersComponent } from "./customers.component";
import { CustomerGuardService } from "./customer-guard.service";
import { CustomerService } from "./customer.service";
import { CustomerEditComponent } from "./edit/customer-edit.component";
import { CustomerResolver } from "./customer-resolver.service";

import { SharedModule } from "../shared/shared.module";

const ROUTES = [
  { 
    path: 'customers',
    canActivate: [ AuthGuard ],
    data: { preload: true },
    component: CustomersComponent
  },
  {
    path: 'customers/:id/edit',
    canActivate: [ CustomerGuardService ],
    component: CustomerEditComponent,
    resolve: { customer: CustomerResolver }
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    CustomersComponent,
    CustomerEditComponent
  ],
  providers: [
    CustomerGuardService,
    CustomerService,
    CustomerResolver
  ]
})
export class CustomerModule { }