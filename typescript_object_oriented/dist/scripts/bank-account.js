import { Constants } from "./constants";
var BankAccount = /** @class */ (function () {
    function BankAccount(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (value) {
            if (value >= 0) {
                this._balance = value;
            }
            else {
                throw new Error('balance is zero! You need to figure out your budget.');
            }
        },
        enumerable: false,
        configurable: true
    });
    BankAccount.prototype.getAccountInfo = function () {
        return {
            routingNumber: Constants.ROUTING_NUMBER,
            bankNumber: Constants.BANK_NUMBER
        };
    };
    BankAccount.prototype.deposit = function (amount) {
        this._balance += amount;
    };
    BankAccount.prototype.withdrawal = function (amount) {
        this.balance -= amount;
    };
    return BankAccount;
}());
export { BankAccount };
//# sourceMappingURL=bank-account.js.map