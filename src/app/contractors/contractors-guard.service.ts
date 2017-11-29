import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class ContractorsGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;

    console.log(`canActivate contractors...`);

    if (isNaN(id) || id < 0) {
      alert("Invalid contractor Id");
      this._router.navigate(["/home"]);
      return false;
    }

    return true;
  }
}