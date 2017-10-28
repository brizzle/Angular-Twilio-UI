import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-purchased-number',
  templateUrl: './create-purchased-number.component.html',
  styleUrls: ['./create-purchased-number.component.css']
})
export class CreatePurchasedNumberComponent implements OnInit {
  purchasedNumberForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // this.purchasedNumberForm = this._fb.group({
    //   sid:'',
    //   phoneNumber:''
    // });
  }

  save(): void {

  }
}
