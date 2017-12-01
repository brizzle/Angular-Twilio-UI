import { async, getTestBed, TestBed, inject } from "@angular/core/testing";
import { BaseRequestOptions, Http, HttpModule, ResponseOptions, XHRBackend } from "@angular/http";
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

  

  // Setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        // {
        //   provide: "http://localhost:5000/api/customers",
        //   useValue: "http://localhost:5000/api/customers"
        // },
        CustomerService,
        {
          provide: XHRBackend,
          useClass: MockBackend
        }
      ]
    });
  });

  describe("Method: GetCustomers()", () => {

    describe("on success", () => {
      it("should return a list of customers", inject([CustomerService, XHRBackend], (_customerService, _mockBackend) => {
        _mockBackend.connections.subscribe((connection) => {
          // This is called every time someone subscribes to
          // an http call.
          //
          // Here we want to fake the http response.
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockData),
            status: 200
          })));
        });
  
        // One way
        // let customers;
        // _customerService.getCustomers().subscribe(c => customers = c);
        // expect(customers.length).toBe(2);
        //
        // OR
        //
        // Another way
        _customerService.getCustomers().subscribe((customers) => {
          // expect(customers.length).toBeGreaterThan(0);
        });
      }));
    });

    describe("on failure", () => {
      it("should return an empty list of customers", inject([CustomerService, XHRBackend], (_customerService, _mockBackend) => {
        _mockBackend.connections.subscribe((connection) => {
          // This is called every time someone subscribes to
          // an http call.
          //
          // Here we want to fake the http response.
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockData),
            status: 404,
            statusText: "Not Found",
            url: ""
          })));
        });
  
        // One way
        let response;
        _customerService.getCustomers().subscribe(res => response = res);
        // expect(response).toBeFalsy(`${JSON.stringify(response)}`);
        //
        // OR
        //
        // Another way
        // _customerService.getCustomers().subscribe((response) => {
        //   expect(response.statusText === "Not Found").toBeTruthy();
        // });
      }));
    });

  });

});