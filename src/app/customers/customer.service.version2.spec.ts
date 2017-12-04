import { async, getTestBed, TestBed, resetFakeAsyncZone } from "@angular/core/testing";
import { BaseRequestOptions, Http, Response, ResponseType, ResponseOptions, XHRBackend } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";

import { CustomerService } from "./customer.service";
import { ICustomer, Customer } from "./customer";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

describe("Service: CustomerService (Test Setup Version #2)", () => {
  let sut: CustomerService;
  let backend: MockBackend;

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        CustomerService,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });

    const testbed = getTestBed();
    backend = testbed.get(MockBackend);
    sut = testbed.get(CustomerService);
  }));

  function setupConnections(backend: MockBackend, options: any) {
    backend.connections.subscribe((connection: MockConnection) => {
      const responseOptions = new ResponseOptions(options);
      const response = new Response(responseOptions);

      connection.mockRespond(response);
    });
  }

  function setupConnectionWithError(backend: MockBackend, options: any) {
    backend.connections.subscribe((connection: MockConnection) => {
      //connection.mockError(new Error(options));
      connection.mockError(new Response(options) as Response & Error);
    });
  }

  it("should not be null on creation", () => {
    expect(sut).not.toBeNull(sut);
  });

  describe("Method: GetCustomers()", () => {

    describe("on success", () => {
      it("should return a list of customers", (done) => {
        setupConnections(backend, {
          body: mockData,
          status: 200,

        });
  
        sut
          .getCustomers()
          .subscribe((customers: ICustomer[]) => {        
            expect(customers.length).toBeGreaterThan(0, customers);
            done();
        });
      });
    });

    describe("on not found", () => {
      it("should return an empty object", (done) => {
        setupConnections(backend, {
          body: null,
          status: 404
        });

        sut
          .getCustomers()
          .subscribe((response) => {
            let expectedValue = {} as ICustomer[];
            expect(JSON.stringify(response)).toBe(JSON.stringify(expectedValue), response);
            done();
        });
      });
    });

    describe("on error", () => {
      it("should log an error to the console", (done) => {
        setupConnectionWithError(backend, {
          body: { error: "error" },
          status: 500
        });

        spyOn(console, "error");

        sut
          .getCustomers()
          .subscribe(null, (error) => {
            expect(console.error).toHaveBeenCalled();
            done();
        });
      });

      it("should return an error", (done) => {
        setupConnectionWithError(backend, {
          body: { error: "error" },
          status: 500
        });

        sut
          .getCustomers()
          .subscribe(null, (error) => {
            expect(error).toBe("error");
            done();
        });
      });
    });

  });

  describe("Method: GetCustomer()", () => {

  });

});