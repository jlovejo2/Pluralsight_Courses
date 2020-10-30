export interface AccountInfo {
    routingNumber: number;
    bankNumber: number;
}

export interface DepositWithdrawal {
    deposit(amount: number): void;
    withdrawal(amount: number): void;
}