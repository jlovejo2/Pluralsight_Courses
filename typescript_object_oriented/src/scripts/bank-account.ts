
export class BankAccount {

    private _balance: number = 0;
    id: number;
    title: string;
    accountType: AccountType;

    constructor(accountSettings: any) { 
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }

    get balance() {
        return this._balance
    }

    set balance(value:number) {
        this._balance = value;
    }

    deposit(amount: number) {
        this._balance += amount;
    }

    withdrawal(amount: number) {
        this.balance -= amount;
    }
}