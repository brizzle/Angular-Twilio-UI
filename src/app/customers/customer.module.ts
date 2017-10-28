import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { CustomersComponent } from "./customers.component";
import { CustomerDetailComponent } from "./customer-detail.component";
import { CustomerGuardService } from "./customer-guard.service";

@NgModule({
    declarations: [
        CustomersComponent,
        CustomerDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'customers', component: CustomersComponent },
            { path: 'customers/:id', canActivate: [ CustomerGuardService ], component: CustomerDetailComponent }
        ])
    ],
    providers: [
        CustomerGuardService
    ]
})

export class CustomerModule { }