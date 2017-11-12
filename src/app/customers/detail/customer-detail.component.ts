import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router, CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ICustomer, Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})

export class CustomerDetailComponent implements OnInit{
  customerForm: FormGroup;
  customer: ICustomer = new Customer();
  private _sub: Subscription;
  errorMessage: string;
  pageTitle: string = "Customer Detail";

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _formBuilder: FormBuilder,
              private _customerService: CustomerService) {}

  ngOnInit(): void {
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
      lastName: this.customer.lastName
    //   phoneNumber: this.customer.phoneNumber,
    //   anonymousPhoneNumber: this.customer.anonymousPhoneNumber,
    //   message: this.customer.message
    });

    // if (this.customer.id === 0) {
    //   this.pageTitle = "Add Customer";
    // } else {
    //   this.pageTitle = `Edit Customer: ${this.customer.firstName} ${this.customer.lastName}`;
    // }

    // this.customerForm.patchValue({
    //   firstName: this.customer.firstName,
    //   lastName: this.customer.lastName,
    //   phoneNumber: this.customer.phoneNumber,
    //   anonymousPhoneNumber: this.customer.anonymousPhoneNumber,
    //   message: this.customer.message
    // });
  }

  handleError(error: any): void {
    this.errorMessage = <any>error
  }

  back(): void {
    this._router.navigate(["/customers"]);
  }
}
