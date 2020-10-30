import { DepositWithdrawal, Account } from './interfaces';

export class ATM implements DepositWithdrawal {
    
    //using Account here creates a polymorphism situation
    constructor(private account: Account) {}

    deposit (amount: number): void {
        this.account.deposit(amount)
    }

    withdrawal (amount: number): void {
        this.account.withdrawal(amount);
    }
}