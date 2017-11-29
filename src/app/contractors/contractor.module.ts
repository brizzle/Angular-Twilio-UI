import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContractorsComponent } from './contractors.component';
import { AuthGuard } from '../users/auth-guard.service';
import { ContractorsGuardService } from './contractors-guard.service';

const ROUTES = [
  {
    path: 'contractors',
    component: ContractorsComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  declarations: [
    ContractorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [ ContractorsGuardService ]
})
export class ContractorModule { }
