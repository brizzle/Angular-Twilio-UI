import { Component, transition } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

// import { PurchasedNumberService } from './purchased-numbers/purchased-numbers.service';
import { AuthService } from './users/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [ PurchasedNumberService ]
})
export class AppComponent {
  pageTitle = 'Brocks app';
  loading: boolean = true;

  constructor(private authService: AuthService,
              private _router: Router) {
    _router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
          this.loading = false;
    }
  }

  login(): void {
    this._router.navigate(["/login"]);
  }

  logOut(): void {
    this.authService.logout();
    this._router.navigateByUrl("/home");
  }

  signUp(): void {
    console.log("signUp()...");
    this._router.navigate(["/signUp"]);
  }

  dashboard(): void {
    this._router.navigate(["/dashboard"]);
  }

  customers(): void {
    this._router.navigate(["/customers"]);
  }

  contractors(): void {
    this._router.navigate(["/contractors"]);
  }

  purchasedNumbers(): void {
    this._router.navigate(["/purchasedNumbers"]);
  }

  twilioMessages(): void {
    this._router.navigate(["/twilioMessages"]);
  }
}
