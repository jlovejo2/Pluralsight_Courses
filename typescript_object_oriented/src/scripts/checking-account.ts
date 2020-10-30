import { BankAccount } from "./bank-account";
import { AccountType } from "./enums";
import { AccountInfo, AccountSettings } from "./interfaces";

export class CheckingAccount extends BankAccount{
    accountType: AccountType.Checking;

    constructor(accountSettings: AccountSettings) {
        super(accountSettings);
    }

    getAccountInfo(): AccountInfo<number, number> {
        return {
            routingNumber: 1234,
            bankNumber: 4321
        }
    }

}

