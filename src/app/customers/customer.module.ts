import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AuthGuard } from "../users/auth-guard.service";
import { CustomersComponent } from "./customers.component";
import { CustomerDetailComponent } from "./detail/customer-detail.component";
import { CustomerGuardService } from "./customer-guard.service";
import { CustomerService } from "./customer.service";
import { CustomerEditComponent } from "./edit/customer-edit.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { 
                path: 'customers',
                canActivate: [ AuthGuard ],
                data: { preload: true },
                component: CustomersComponent
            },
            {
                path: 'customers/:id',
                canActivate: [ CustomerGuardService ],
                component: CustomerDetailComponent
            },
            {
                path: 'customers/:id/edit',
                canActivate: [ CustomerGuardService ],
                component: CustomerEditComponent
            }
        ])
    ],
    declarations: [
        CustomersComponent,
        CustomerDetailComponent,
        CustomerEditComponent
    ],
    providers: [
        CustomerGuardService,
        CustomerService
    ]
})

export class CustomerModule { }