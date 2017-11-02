import { Component, OnInit, Input } from '@angular/core';

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

  constructor(private _customerService: CustomerService) { }

  performFilter(filterBy: string): ICustomer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.customers.filter((customer: ICustomer) => customer.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    // this.customers = [
    //   {
    //     "id": 1,
    //     "firstName": "Brock",
    //     "lastName": "Billings",
    //     "phoneNumber": "405.306.3618"
    //    },
    //   {
    //     "id": 2,
    //     "firstName": "John",
    //     "lastName": "Doe",
    //     "phoneNumber": "918.111.2222"
    //   }
    // ];
    this._customerService.getCustomers()
      .subscribe(customers => {
        this.customers = customers;
        this.filteredCustomers = this.customers;
      },
    error => this.errorMessage = <any>error);
  }
}
