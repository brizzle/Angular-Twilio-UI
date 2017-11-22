import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

// import { Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/delay';

import { CustomerService } from "./customer.service";
import { ICustomer } from "./customer";

@Injectable()
export class CustomerResolver implements Resolve<ICustomer> {

  constructor(private _customerService: CustomerService,
              private _router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ICustomer> {
    let id = <any>route.paramMap.get("id");

    // console.log(`resolve.... ${id}`);

    if (isNaN(id)) {
      console.log(`Customer id was not a number: ${id}`);
      this._router.navigate(["/customers"]);
      return Observable.of(null);
    }
      return this._customerService.getCustomer(+id)
      .map(customer => this.extractData(customer, +id))
      .do(customer => console.log(`customerResolver: ${JSON.stringify(customer)}`))
      .catch(this.handleError)
      .delay(500);
  }

  private extractData(customer: ICustomer, id: number): ICustomer {
    if (customer) {
      return customer;
    }
    console.log(`Customer was not found: ${id}`);
    this._router.navigate(["/customers"]);
    return null;
  }

  private handleError(error: any): Observable<any> {
    console.log(`Retrieval error: ${error}`);
    this._router.navigate(["/customers"]);
    return Observable.of(null);
  }
}