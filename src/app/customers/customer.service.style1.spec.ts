import { async, getTestBed, TestBed, inject } from "@angular/core/testing";
import { BaseRequestOptions, RequestMethod, Http, HttpModule, Response, ResponseOptions, XHRBackend } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";

import { CustomerService } from "./customer.service";
import { ICustomer, Customer } from "./customer";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

// References
// https://blog.thoughtram.io/angular/2016/11/28/testing-services-with-http-in-angular-2.html
// https://stackoverflow.com/questions/41273244/angular-testing-http-with-mockbackend-is-async-really-required
//
// https://github.com/brizzle/testing-angular-services/blob/master/src/app/user.service.spec.ts

describe("Service: CustomerService", () => {
  const mockData: Array<ICustomer> = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-123-1234",
      anonymousPhoneNumber: null,
      message: null
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "123-123-3243",
      anonymousPhoneNumber: null,
      message: null
    }
  ];

  let service: CustomerService;
  let backend: MockBackend;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [
            MockBackend,
            BaseRequestOptions
          ]},
          CustomerService
      ]
    });
  });

  beforeEach(inject([CustomerService, MockBackend], (customerService: CustomerService, mockBackend: MockBackend) => {
    service = customerService;
    backend = mockBackend;
  }));

  it("should not be null on creation", inject([CustomerService], (service: CustomerService) => {
    expect(service).not.toBeNull();
  }));

  describe("Method: GetCustomers() not using async", () => {

    describe("on success", () => {
      it("should return a list of customers", () => {
        backend.connections.subscribe((connection: MockConnection) => {
          let options = new ResponseOptions({
            body: JSON.stringify(mockData),
            status: 200
          });
          
          connection.mockRespond(new Response(options));
    
          expect(connection.request.method).toEqual(RequestMethod.Get);
        });
    
        service
          .getCustomers()
          .subscribe((response) => {
            expect(response).toEqual(mockData, JSON.stringify(response));
        });
      });
    });

    describe("on error", () => {

    });
  });

  describe("Method: GetCustomers() using async", () => {

    describe("on success", () => {
      it("should return a list of customers", (done) => {
        backend.connections.subscribe((connection: MockConnection) => {
          let options = new ResponseOptions({
            body: JSON.stringify(mockData),
            status: 200
          });
          
          connection.mockRespond(new Response(options));
    
          expect(connection.request.method).toEqual(RequestMethod.Get);
        });
    
        service
          .getCustomers()
          .subscribe((response) => {
            expect(response).toEqual(mockData, JSON.stringify(response));
            done();
        });
      });
    });

    describe("on error", () => {

    });
  });

});