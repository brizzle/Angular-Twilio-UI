import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ICustomer } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnChanges {
  @Input() inputMessage: string;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(): void {
  }

  customers: ICustomer[] = [
    {
      id: 1,
      firstName: "Brock",
      lastName: "Billings",
      phoneNumber: "405.306.3618"
     },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "918.111.2222"
    }
  ];

  onclick(): void {
    
  }

}
