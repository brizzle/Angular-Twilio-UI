import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  pageTitle: string = "Log In";

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      userName: [null],
      password: [null]
    });
  }

  login(): void {
    if (this.loginForm.dirty && this.loginForm.valid) {
      let userName = this.loginForm.get("userName").value;
      let password = this.loginForm.get("password").value;

      this._authService.login(userName, password);

      if (this._authService.redirectUrl) {
        this._router.navigateByUrl(this._authService.redirectUrl);
      } else {
        this._router.navigate(["/customers"]);
      }

    } else {
      this.errorMessage = "Please enter a user name and password.";
    }
  }
}