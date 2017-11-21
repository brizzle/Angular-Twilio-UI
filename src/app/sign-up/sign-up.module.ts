import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AuthGuard } from '../users/auth-guard.service';

import { SignUpComponent } from './sign-up.component';
import { SignUpSection1Component } from './sign-up-section-1.component';
import { SignUpSection2Component } from './sign-up-section-2.component';

const CHILD_ROUTES = [
  {
    path: "", redirectTo: "sectionOne", pathMatch: "full"
  },
  {
    path: "sectionOne", component: SignUpSection1Component
  },
  {
    path: "sectionTwo", component: SignUpSection2Component
  }
];

const ROUTES = [
  {
    path: "signUp",
    component: SignUpComponent,
    children: CHILD_ROUTES
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    SignUpComponent,
    SignUpSection1Component,
    SignUpSection2Component
  ]
})
export class SignUpModule { }
