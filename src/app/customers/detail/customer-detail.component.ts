import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router, CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ICustomer, Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { convertToParamMap } from '@angular/router/src/shared';

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
    // Using snapshot approach
    // Used when reading parameters only once
    // + at the front cast to numeric number.
    // let id = +this._route.snapshot.paramMap.get("id");

    // Using the Observable approach
    // When using components where only the parameter changes,
    // the component will not be reinitialized therefore the
    // ngOnInit() will never be called again.
    this._sub = this._route.paramMap.subscribe(
      params => {
        let id = +params.get("id");

        this.customerForm = this._formBuilder.group({
          id: [null],
          firstName: [null],
          lastName: [null],
          phoneNumber: [null],
          anonymousPhoneNumber: [null],
          message: [null]
        });

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

    console.log(`Customer: ${customer}`);

    this.customer = customer;

    // Used when updating parts of an object
    this.customerForm.patchValue({
      id: this.customer.id,
      firstName: this.customer.firstName,
      lastName: this.customer.lastName
    });

    // Used when updating the entire object
    // this.customerForm = this._formBuilder.group({
    //   id: this.customer.id,
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
