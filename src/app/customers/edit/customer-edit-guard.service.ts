import { CanDeactivate } from "@angular/router";
import { CustomerEditComponent } from "./customer-edit.component";
import { Injectable } from "@angular/core";

Injectable()
export class CustomerEditGuardService implements CanDeactivate<CustomerEditComponent> {
  constructor() { }

  canDeactivate(component: CustomerEditComponent): boolean {
    if (component.customerForm.dirty) {
      return confirm(`Navigate away and lose all changes to ${component.customerForm.get("firstName").value} ${component.customerForm.get("lastName").value}?`);
    }

    return true;
  }
}