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
    this._route.data.subscribe(data => {
      this.onCustomerRetrieved(data["customer"]);
    })
  }

  onCustomerRetrieved(customer: ICustomer): void {
    this.customer = customer;

    this.customerForm = this._formBuilder.group({
      id: [this.customer.id],
      firstName: [this.customer.firstName],
      lastName: [this.customer.lastName],
      phoneNumber: [this.customer.phoneNumber],
      anonymousPhoneNumber: [this.customer.anonymousPhoneNumber],
      message: [this.customer.message]
    });

    if (this.customer.id === 0) {
      this.pageTitle = "Add Customer";
    } else {
      this.pageTitle = `Edit Customer: ${this.customer.firstName} ${this.customer.lastName}`;
    }
  }

  handleError(error: any): void {
    this.errorMessage = <any>error
  }

  onCancel(): void {
    this._router.navigate(["/customers"]);
  }

  onSave(): void {
    if (this.customerForm.dirty && this.customerForm.valid) {
      let customer = Object.assign({}, this.customer, this.customerForm.value);

      this._customerService.saveCustomer(customer)
        .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.handleError(error)
        );
    }
  }

  onSaveComplete(): void {
    this.customerForm.reset();
    this._router.navigate(["/customers"]);
  }
}