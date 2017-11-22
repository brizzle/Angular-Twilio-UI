import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ICustomer } from './customer';
import { CustomerService } from "./customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  // @Input() inputMessage: string;
  pageTitle: string = "Customers";
  errorMessage: string;

  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCustomers = this._listFilter ? this.performFilter(this.listFilter) : this.customers;
  }

  filteredCustomers: ICustomer[];
  customers: ICustomer[];

  constructor(private _customerService: CustomerService,
              private _router: Router) { }

  performFilter(filterBy: string): ICustomer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.customers.filter((customer: ICustomer) => customer.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this._customerService.getCustomers()
      .subscribe(customers => {
        this.customers = customers;
        this.filteredCustomers = this.customers;
      },
    error => this.errorMessage = <any>error);
  }

  view(id: number): void {
    console.log("In view()...");
    console.log(`Id: ${id}`);
    this._router.navigate(["/customers", id, "edit"]);
  }

  addCustomer(): void {
    this._router.navigate(["/customers", 0, "edit"]);
  }
}