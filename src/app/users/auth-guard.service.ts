import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route,
         CanActivate, CanActivateChild, CanLoad } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("In canActivate: " + state.url);
    return this.checkLoggedIn(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("In canActivateChild: " + state.url);
    return this.checkLoggedIn(state.url);
  }

  // Cannot access the ActivatedRouteSnapshot or
  // the RouterStateSnapshot because the module defining
  // the route is not yet loaded (if using lazy loading)
  //
  // Blocks preloading
  canLoad(route: Route): boolean {
    console.log("In canLoad: " + route.path);
    return this.checkLoggedIn(route.path);
  }

  checkLoggedIn(url: string): boolean {
    if (this._authService.isLoggedIn()) {
      return true;
    }

    this._authService.redirectUrl = url;
    this._router.navigate(["/login"]);
    return false;
  }
}