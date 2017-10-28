import { Injectable } from "@angular/core";
import { IPurchasedNumber } from "./purchasedNumber";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PurchasedNumberService {
    private _purchasedNumberUrl = 'localhost:5000/api/customers';

    constructor(private _http: HttpClient) {}

    getPurchasedNumbers(): Observable<IPurchasedNumber[]> {
        return this._http.get<IPurchasedNumber[]>(this._purchasedNumberUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}