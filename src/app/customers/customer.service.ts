import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ICustomer } from './customer';

@Injectable()
export class CustomerService {
  private _baseUrl = "http://localhost:5000/api/customers";
  private _customerUrl = './api/customers/customers.json';

  constructor(private _http: Http) { }

  // getCustomers(): Observable<ICustomer[]> {
  //   return this._http.get(this._customerUrl)
  //     .map(this.extractData)
  //     .do(data => console.log("getCustomers: " + JSON.stringify(data)))
  //     .catch(this.handleError);
  // }

  getCustomers(): Observable<ICustomer[]>{
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(this._baseUrl, options)
      .map(this.extractData)
      .do(data => console.log("getCustomers: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getCustomer(id: number): Observable<ICustomer> {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    const url = `${this._baseUrl}/${id}`;

    return this._http.get(url, options)
      .map(this.extractData)
      .do(data => console.log("getCustomer: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  saveCustomer(customer: ICustomer): Observable<ICustomer> {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    if (customer.id === 0) {
      return this.createCustomer(customer, options);
    }
    return this.updateCustomer(customer, options);
  }

  private createCustomer(customer: ICustomer, options: RequestOptions): Observable<ICustomer> {
    customer.id = undefined;
    return this._http.post(this._baseUrl, customer, options)
      .map(this.extractData)
      .do(data => console.log("createCustomer: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private updateCustomer(customer: ICustomer, options: RequestOptions): Observable<ICustomer> {
    const url = `${this._baseUrl}/${customer.id}`;
    return this._http.put(url, customer, options)
      .map(() => customer)
      .do(data => console.log("updateCustomer: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    if (response.status === 404) {
      return {};
    }

    let body = response.json();

    return body || {};
  }

  private handleError(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }
}