"use strict";
class BankAccount {
    _balance;
    constructor(_balance = 0) {
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        if (balance < 0) {
            console.log("balance most be more than zero");
        }
    }
}
let personBalance = new BankAccount(1000);
console.log(personBalance.balance);
personBalance.balance = -100;
console.log(personBalance.balance);
