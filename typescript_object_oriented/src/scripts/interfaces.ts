export interface AccountInfo<TRouteNumber, TBankNumber> {
    routingNumber: TRouteNumber;
    bankNumber: TBankNumber;
}

export interface DepositWithdrawal {
    deposit(amount: number): void;
    withdrawal(amount: number): void;
}

export interface AccountSettings {
    id: number;
    title: string;
    balance: number;
    interestRate?: number;
    accountInfo?: AccountInfo<string ,number>
}

//to have an account you have to have deposit(), withdrawal(), id, title, and balance to make an account
export interface Account extends AccountSettings, DepositWithdrawal {}