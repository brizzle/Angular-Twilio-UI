import { Component, OnInit } from '@angular/core';
import { ICustomer } from './customer';
import { ActivatedRoute, Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})

export class CustomerDetailComponent implements OnInit {
  customer: ICustomer;
  pageTitle: string = "Customer";

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
   }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');

    this.customer = {
      "id": id,
      "firstName": "Brock",
      "lastName": "Billings",
      "phoneNumber": "405.306.3618"
    };

    this.pageTitle += `: ${id}` ;
  }

  onCancel(): void {
    this._router.navigate(["/customers"]);
  }

}
