import { BankAccount } from "./bank-account";
import { AccountType } from './enums'; 

export class SavingsAccount extends BankAccount {
    private _interestRate: number;
    accountType = AccountType.Savings;

    constructor(accountSettings: any) {
        //passing accountSettings into the bankAccount class of instance
        super(accountSettings);
        this._interestRate = accountSettings.interestRate;
    
        setInterval(() => {
            this.addInterest();
        }, 60000);

    }

    getAccountInfo() {
        return {
            routing: 'routing number ....'
        }
    }

    deposit(amount: number) {
        let newAmmount = amount + (amount * (this._interestRate / 100 ))
        this.balance += newAmmount;
    }

    private addInterest() {
        this.balance = this.balance + this.balance * (this._interestRate / 100 )
    }   
}