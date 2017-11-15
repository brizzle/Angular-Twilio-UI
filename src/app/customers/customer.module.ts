import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AuthGuard } from "../users/auth-guard.service";
import { CustomersComponent } from "./customers.component";
import { CustomerGuardService } from "./customer-guard.service";
import { CustomerService } from "./customer.service";
import { CustomerEditComponent } from "./edit/customer-edit.component";

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
    component: CustomerEditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    CustomersComponent,
    CustomerEditComponent
  ],
  providers: [
    CustomerGuardService,
    CustomerService
  ]
})
export class CustomerModule { }