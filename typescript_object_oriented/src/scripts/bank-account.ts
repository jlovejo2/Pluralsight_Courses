import { AccountType } from './enums';

export abstract class BankAccount {

    private _balance: number = 0;
    id: number;
    title: string;
    abstract accountType: AccountType;

    constructor(accountSettings: any) { 
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }

    get balance() {
        return this._balance
    }

    set balance(value:number) {
        if (value >= 0) {
        this._balance = value;
    } else {
        throw new Error('balance is zero! You need to figure out your budget.')
    }
    } 

    deposit(amount: number) {
        this._balance += amount;
    }

    withdrawal(amount: number) {
        this.balance -= amount;
    }
}