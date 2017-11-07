import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ITwilioMessage } from './twilio-message';

@Injectable()
export class TwilioMessageService {
    private _baseUrl = "http://localhost:5000/api/responses";

    constructor(private _http: Http) { }

    getTwilioMessages(): Observable<ITwilioMessage[]>{
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
    
        return this._http.get(this._baseUrl, options)
          .map(this.extractData)
          .do(data => console.log("getTwilioMessages: " + JSON.stringify(data)))
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