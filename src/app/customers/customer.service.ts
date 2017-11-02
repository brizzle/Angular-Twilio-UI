import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ICustomer } from './customer';

@Injectable()
export class CustomerService {
  private _customerUrl = './api/customers/customers.json';

  constructor(private _http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>(this._customerUrl)
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getCustomer(id: number): Observable<ICustomer> {
    return this.getCustomers()
      .map((customers: ICustomer[]) => customers.find(c => c.id === id));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
