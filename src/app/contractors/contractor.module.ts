import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContractorsComponent } from './contractors.component';

@NgModule({
  declarations: [
    ContractorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'contractors', component: ContractorsComponent }
      // { path: 'contractors/:id', component: CustomerDetailComponent }
    ])
  ],
  providers: [],
  exports: []
})

export class ContractorModule { }
