var ATM = /** @class */ (function () {
    //using Account here creates a polymorphism situation
    function ATM(account) {
        this.account = account;
    }
    ATM.prototype.deposit = function (amount) {
        this.account.deposit(amount);
    };
    ATM.prototype.withdrawal = function (amount) {
        this.account.withdrawal(amount);
    };
    return ATM;
}());
export { ATM };
//# sourceMappingURL=atm.js.map