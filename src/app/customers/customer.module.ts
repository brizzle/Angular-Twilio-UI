import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { CustomersComponent } from "./customers.component";
import { CustomerDetailComponent } from "./customer-detail.component";
import { CustomerGuardService } from "./customer-guard.service";
import { CustomerService } from "./customer.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { 
                path: 'customers',
                component: CustomersComponent
            },
            {
                path: 'customers/:id',
                canActivate: [ CustomerGuardService ],
                component: CustomerDetailComponent
            }
        ])
    ],
    declarations: [
        CustomersComponent,
        CustomerDetailComponent
    ],
    providers: [
        CustomerGuardService,
        CustomerService
    ]
})

export class CustomerModule { }