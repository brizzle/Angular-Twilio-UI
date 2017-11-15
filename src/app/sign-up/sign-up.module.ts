import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SignUpComponent } from './sign-up.component';
import { AuthGuard } from '../users/auth-guard.service';

const ROUTES = [
  {
    path: "signUp",
    component: SignUpComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ SignUpComponent ]
})
export class SignUpModule { }
