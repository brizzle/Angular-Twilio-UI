import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router, CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ICustomer, Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customer: ICustomer = new Customer();
  private _sub: Subscription;
  errorMessage: string;

  pageTitle: string = "Customer";
  
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _formBuilder: FormBuilder,
              private _customerService: CustomerService) { }

  ngOnInit(): void {
    // Example of one way to
    // create a Form Group
    // this.customerForm = new FormGroup({
    //   id: new FormControl(0),
    //   firstName: new FormControl("Brock"),
    //   lastName: new FormControl(),
    //   phoneNumber: new FormControl()
    //  });

    // Example of a way to get a parameter
    // from a route
    // let id = +this._route.snapshot.paramMap.get('id');

    // Example of another way to create a Form Group.
    // Arrays are used to pass in the values and/or validations.
    this.customerForm = this._formBuilder.group({
      id: +this._route.snapshot.paramMap.get('id'),
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      anonymousPhoneNumber: [null],
      message: [null]
    });

    this._sub = this._route.params.subscribe(
        params => {
            let id = +params["id"];
            this.getCustomer(id);
        }
    );

    // Disabling the id field removes it from the form group
    //  this.customerForm = this._formBuilder.group({
    //      id: {value: id, disabled: true},
    //      firstName: null,
    //      lastName: null,
    //      phoneNumber: null
    //  });

    // this.customer = {
    //   "id": id,
    //   "firstName": "Brock",
    //   "lastName": "Billings",
    //   "phoneNumber": "405.306.3618"
    // };

    //this.pageTitle += `: ${id}` ;
    this.pageTitle = "Add new customer";
  }

  getCustomer(id: number): void {
    this._customerService.getCustomer(id)
        .subscribe(
          (customer: ICustomer) => this.onCustomerReceived(customer),
          (error: any) => this.handleError(error)
    );
  }

  onCustomerReceived(customer: ICustomer): void {
    if (this.customerForm) {
        this.customerForm.reset();
    }

    this.customerForm = this._formBuilder.group({
      id: null,
      firstName: null,
      lastName: null,
      phoneNumber: null,
      anonymousPhoneNumber: null,
      message: null
    });

    console.log(`Customer: ${customer}`);

    this.customer = customer;

    this.customerForm = this._formBuilder.group({
      id: this.customer.id,
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      phoneNumber: this.customer.phoneNumber,
      anonymousPhoneNumber: this.customer.anonymousPhoneNumber,
      message: this.customer.message
    });

    if (this.customer.id === 0) {
      this.pageTitle = "Add Customer";
    } else {
      this.pageTitle = `Edit Customer: ${this.customer.firstName} ${this.customer.lastName}`;
    }

    this.customerForm.patchValue({
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      phoneNumber: this.customer.phoneNumber,
      anonymousPhoneNumber: this.customer.anonymousPhoneNumber,
      message: this.customer.message
    });
  }

  handleError(error: any): void {
    this.errorMessage = <any>error
  }

  

  populateTestData(): void {
    //this.customerForm.setValue({
    //id: 3,
    //firstName: "Brock",
    //lastName: "Billings",
    //phoneNumber: "4053063618"
    //});
          
    this.customerForm.patchValue({
      firstName: "Brock",
      lastName: "Billings"
    });
  }

  onCancel(): void {
    this._router.navigate(["/customers"]);
  }

  saveCustomer(): void {
    if (this.customerForm.dirty && this.customerForm.valid) {
        let c = Object.assign({}, this.customer, this.customerForm.value);

        this._customerService.saveCustomer(c)
            .subscribe(
                () => this.onSaveComplete(),
                (error: any) => this.errorMessage = <any>error
            );
    }
    // console.log(this.customerForm);
    // console.log("Saved: " + JSON.stringify(this.customerForm.value));
  }

  onSaveComplete(): void {
    this.customerForm.reset();
    this._router.navigate(["/customers"]);
  }
}
