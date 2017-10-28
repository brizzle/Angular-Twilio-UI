import { Component, OnInit } from '@angular/core';
import { IPurchasedNumber } from './purchasedNumber';
import { PurchasedNumberService } from './purchased-numbers.service';

@Component({
    // selector: 'purchased-numbers',
    templateUrl: './purchased-number-list.component.html',
    styleUrls: ['./purchased-number-list.component.css']
})

export class PurchasedNumberListComponent implements OnInit {
    pageTitle: string = 'Purchased Number List';
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredNumbers = this.listFilter ? this.performFilter(this.listFilter) : this.numbers;
    }

    filteredNumbers: IPurchasedNumber[];

    numbers: IPurchasedNumber[] = [];

    constructor(private _purchasedNumberService: PurchasedNumberService) {
    }

    performFilter(filterBy: string): IPurchasedNumber[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.numbers.filter((number: IPurchasedNumber) =>
        number.number.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this._purchasedNumberService.getPurchasedNumbers()
            .subscribe(purchasedNumbers => {
                this.numbers = purchasedNumbers;
                this.filteredNumbers = this.numbers;
            },
                error => this.errorMessage = <any>error);
    }

    createPurchasedNumber(): void {
        
    }
}