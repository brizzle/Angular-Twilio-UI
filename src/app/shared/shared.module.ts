import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class SharedModule { }