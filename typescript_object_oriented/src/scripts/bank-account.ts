import { Account, AccountInfo, AccountSettings } from './interfaces';
import { AccountType } from './enums';
import { Constants } from "./constants";

export abstract class BankAccount implements Account {
    private _balance: number = 0;
    id: number;
    title: string;
    abstract accountType: AccountType;

    constructor(accountSettings: AccountSettings) { 
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

    getAccountInfo(): AccountInfo<string, number> {
        return {
            routingNumber: Constants.ROUTING_NUMBER,
            bankNumber: Constants.BANK_NUMBER 
        }
    }

    deposit(amount: number) {
        this._balance += amount;
    }

    withdrawal(amount: number) {
        this.balance -= amount;
    }
}