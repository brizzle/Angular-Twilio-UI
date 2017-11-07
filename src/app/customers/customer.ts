export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    anonymousPhoneNumber: string;
    message: string;
}

export class Customer {
    constructor(
        public id = 0,
        public firstName = null,
        public lastName= null,
        public phoneNumber = null,
        public anonymousPhoneNumber = null,
        public message = "") { }
}