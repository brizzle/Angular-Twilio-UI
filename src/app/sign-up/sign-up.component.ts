import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { navigationCancelingError } from '@angular/router/src/shared';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  pageTitle: string = "Sign up page";

  private _canNavigate: { [key: string]: boolean } = {};

  constructor(private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.navigate(null);
  }

  navigate(path: string): void {
    this._canNavigate = {};

    if (path === "sectionOne") {
      this._canNavigate["sectionOne"] = false;
      this._canNavigate["sectionTwo"] = true;
    } else if (path === "sectionTwo") {
      this._canNavigate["sectionOne"] = true;
      this._canNavigate["sectionTwo"] = false;
    } else {
      this._canNavigate["sectionOne"] = false;
      this._canNavigate["sectionTwo"] = true;
    }
  }

  sectionOne(): void {
    this._router.navigate(["sectionOne"], { relativeTo: this._route });
    this.navigate("sectionOne");
  }

  sectionTwo(): void {
    this._router.navigate(["sectionTwo"], { relativeTo: this._route });
    this.navigate("sectionTwo");
  }

  canGoToPrevious(): boolean {
    return this._canNavigate["sectionOne"];
  }

  canGoToNext(): boolean {
    return this._canNavigate["sectionTwo"];
  }

  isValid(path: string): boolean {
    if (path) {
      return true;
    }
  }
}
