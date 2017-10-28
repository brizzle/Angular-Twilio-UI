import { Component, OnInit } from '@angular/core';
import { IContractor } from './contractor';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css']
})
export class ContractorsComponent implements OnInit {
  pageTitle: string = 'Contractor Component';

  constructor() { }

  ngOnInit() {
  }

  contractors: IContractor[] = [
    {
      id: 1,
      firstName: "Joey",
      lastName: "Gray",
      phoneNumber: "405.306.3618"
     },
    {
      id: 2,
      firstName: "Sonny",
      lastName: "Gee",
      phoneNumber: "918.111.2222"
    }
  ];

}
