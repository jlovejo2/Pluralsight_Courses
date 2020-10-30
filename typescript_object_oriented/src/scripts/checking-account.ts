import { BankAccount } from "./bank-account";
import { AccountType } from "./enums";
import { AccountInfo, AccountSettings } from "./interfaces";

export class CheckingAccount extends BankAccount{
    accountType = AccountType.Checking;

    //no longer need this code because getAccountInfo is method on base class bankAccount
    constructor(accountSettings: AccountSettings) {
        super(accountSettings);
    }

    // getAccountInfo(): AccountInfo<number, number> {
    //     return {
    //         routingNumber: 1234,
    //         bankNumber: 4321
    //     }
    // }

}

