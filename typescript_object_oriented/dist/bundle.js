/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_account_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/account-list */ "./src/scripts/account-list.ts");
/* harmony import */ var _scripts_checking_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/checking-account */ "./src/scripts/checking-account.ts");
/* harmony import */ var _scripts_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/enums */ "./src/scripts/enums.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");
/* harmony import */ var _scripts_savings_accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/savings-accounts */ "./src/scripts/savings-accounts.ts");





var Main = /** @class */ (function () {
    function Main(renderer) {
        this.renderer = renderer;
        // Create CheckingAccount instance
        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_1__["CheckingAccount"]({
            id: 1,
            title: 'Jimmy Bob Checking',
            balance: 500,
        });
        this.savingsAccount = new _scripts_savings_accounts__WEBPACK_IMPORTED_MODULE_4__["SavingsAccount"]({
            id: 100,
            title: 'Jimmy Bob Savings',
            balance: 5000,
            interestRate: 2.5,
        });
        var html = this.renderAccounts();
        this.renderer.render('<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br/>' + html);
    }
    Main.prototype.renderAccounts = function () {
        var acctsHtml = '';
        var accList = new _scripts_account_list__WEBPACK_IMPORTED_MODULE_0__["AccountList"]();
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);
        accList.getAccounts().forEach(function (acct, index) {
            acctsHtml += acct.title + '<br/>';
        });
        return acctsHtml;
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingsAccount;
                break;
        }
        this.renderAccount(this.currentAccount);
    };
    Main.prototype.renderAccount = function (account) {
        var accountType = _scripts_enums__WEBPACK_IMPORTED_MODULE_2__["AccountType"][account.accountType];
        var html = "\n                <h3>" + accountType + " Account</h3>\n                <br />\n                <span class=\"label\">Owner:</span> " + account.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + account.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amount = +amountInput.value;
        var error;
        try {
            if (deposit) {
                this.currentAccount.deposit(amount);
            }
            else {
                this.currentAccount.withdrawal(amount);
            }
        }
        catch (err) {
            error = err;
        }
        this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
var renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__["Renderer"](document.querySelector('#viewTemplate'));
var main = new Main(renderer);
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
window.main = main;


/***/ }),

/***/ "./src/scripts/account-list.ts":
/*!*************************************!*\
  !*** ./src/scripts/account-list.ts ***!
  \*************************************/
/*! exports provided: AccountList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountList", function() { return AccountList; });
var AccountList = /** @class */ (function () {
    function AccountList() {
        this._accountList = [];
    }
    AccountList.prototype.add = function (account) {
        this._accountList.push(account);
    };
    AccountList.prototype.getAccounts = function () {
        return this._accountList;
    };
    return AccountList;
}());



/***/ }),

/***/ "./src/scripts/bank-account.ts":
/*!*************************************!*\
  !*** ./src/scripts/bank-account.ts ***!
  \*************************************/
/*! exports provided: BankAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccount", function() { return BankAccount; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.ts");

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
        enumerable: true,
        configurable: true
    });
    BankAccount.prototype.getAccountInfo = function () {
        return {
            routingNumber: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].ROUTING_NUMBER,
            bankNumber: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].BANK_NUMBER
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



/***/ }),

/***/ "./src/scripts/checking-account.ts":
/*!*****************************************!*\
  !*** ./src/scripts/checking-account.ts ***!
  \*****************************************/
/*! exports provided: CheckingAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckingAccount", function() { return CheckingAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CheckingAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"]));



/***/ }),

/***/ "./src/scripts/constants.ts":
/*!**********************************!*\
  !*** ./src/scripts/constants.ts ***!
  \**********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "ROUTING_NUMBER", {
        get: function () { return '1231A4433Y2'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "BANK_NUMBER", {
        get: function () { return 100008374; },
        enumerable: true,
        configurable: true
    });
    return Constants;
}());



/***/ }),

/***/ "./src/scripts/enums.ts":
/*!******************************!*\
  !*** ./src/scripts/enums.ts ***!
  \******************************/
/*! exports provided: AccountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Checking"] = 0] = "Checking";
    AccountType[AccountType["Savings"] = 1] = "Savings";
})(AccountType || (AccountType = {}));


/***/ }),

/***/ "./src/scripts/renderer.ts":
/*!*********************************!*\
  !*** ./src/scripts/renderer.ts ***!
  \*********************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
var Renderer = /** @class */ (function () {
    // instance way
    // constructor(private viewTemplate: HTMLDivElement) {
    //     this.viewTemplate.innerHTML = '<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />';
    // }
    // render(html: string) {
    //     this.viewTemplate.innerHTML = html;
    // }
    function Renderer(viewTemplate) {
        this.viewTemplate = viewTemplate;
        this.viewTemplate.innerHTML = '<h2>Welcome to Acme Bank!</h2>.........................................<br /><h5>Your Accounts:</h5><br />';
    }
    Renderer.prototype.render = function (html) {
        this.viewTemplate.innerHTML = html;
    };
    Renderer.prototype.renderError = function (message) {
        this.viewTemplate.innerHTML += "<br /><br /><div class=\"alert alert-danger\">" + message + "</div>";
    };
    return Renderer;
}());



/***/ }),

/***/ "./src/scripts/savings-accounts.ts":
/*!*****************************************!*\
  !*** ./src/scripts/savings-accounts.ts ***!
  \*****************************************/
/*! exports provided: SavingsAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsAccount", function() { return SavingsAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountSettings) {
        var _this = 
        //passing accountSettings into the bankAccount class of instance
        _super.call(this, accountSettings) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Savings;
        _this._interestRate = accountSettings.interestRate;
        setInterval(function () {
            _this.addInterest();
        }, 60000);
        return _this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        var newAmmount = amount + (amount * (this._interestRate / 100));
        this.balance += newAmmount;
    };
    SavingsAccount.prototype.addInterest = function () {
        this.balance = this.balance + this.balance * (this._interestRate / 100);
    };
    return SavingsAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"]));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWNjb3VudC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JhbmstYWNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jaGVja2luZy1hY2NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lbnVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zYXZpbmdzLWFjY291bnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEO0FBRVE7QUFDZjtBQUNBO0FBQ2M7QUFFNUQ7SUFLSSxjQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xDLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUkseUVBQWUsQ0FBQztZQUN2QyxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsT0FBTyxFQUFFLEdBQUc7U0FDZixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksd0VBQWMsQ0FBQztZQUNyQyxFQUFFLEVBQUUsR0FBRztZQUNQLEtBQUssRUFBRSxtQkFBbUI7WUFDMUIsT0FBTyxFQUFFLElBQUk7WUFDYixZQUFZLEVBQUUsR0FBRztTQUNwQixDQUFDO1FBRUYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGtFQUFrRSxHQUFHLElBQUksQ0FBQztJQUNuRyxDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLElBQUksU0FBUyxHQUFXLEVBQUUsQ0FBQztRQUMzQixJQUFNLE9BQU8sR0FBRyxJQUFJLGlFQUFXLEVBQUU7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUN0QyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdEMsQ0FBQyxDQUFDO1FBRUYsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxJQUFhO1FBQ3BCLFFBQU8sSUFBSSxFQUFFO1lBQ1QsS0FBSyxVQUFVO2dCQUNYLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDM0MsTUFBSztZQUNULEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjO2dCQUN6QyxNQUFNO1NBQ2I7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDM0MsQ0FBQztJQUVELDRCQUFhLEdBQWIsVUFBYyxPQUFvQjtRQUM5QixJQUFNLFdBQVcsR0FBRywwREFBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxJQUFNLElBQUksR0FBRywyQkFDQyxXQUFXLG1HQUVtQixPQUFPLENBQUMsS0FBSyx5RkFFVixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsMFRBS3BFLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0NBQWlCLEdBQWpCLFVBQWtCLE9BQWdCO1FBQzlCLElBQUksV0FBVyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdkYsSUFBSSxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBRztZQUFFLElBQUksT0FBTyxFQUFFO2dCQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZDO2lCQUNJO2dCQUNELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzFDO1NBQ0o7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLEtBQUssR0FBRyxHQUFHLENBQUM7U0FDZjtRQUNHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hDLElBQUcsS0FBSyxFQUFFO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVDO0lBRUwsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDO0FBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSwwREFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUN2RSxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVoQyw2RUFBNkU7QUFDN0UsNkRBQTZEO0FBQzdELGtFQUFrRTtBQUM1RCxNQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2pHMUI7QUFBQTtBQUFBO0lBQUE7UUFDSSxpQkFBWSxHQUFrQixFQUFFLENBQUM7SUFTckMsQ0FBQztJQVBHLHlCQUFHLEdBQUgsVUFBSSxPQUFvQjtRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUF3QztBQUV4QztJQU1JLHFCQUFZLGVBQWdDO1FBTHBDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFNekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxlQUFlLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDM0MsQ0FBQztJQUVELHNCQUFJLGdDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRO1FBQ3hCLENBQUM7YUFFRCxVQUFZLEtBQVk7WUFDcEIsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUN6QjtpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDO2FBQzFFO1FBQ0QsQ0FBQzs7O09BUkE7SUFVRCxvQ0FBYyxHQUFkO1FBQ0ksT0FBTztZQUNILGFBQWEsRUFBRSxvREFBUyxDQUFDLGNBQWM7WUFDdkMsVUFBVSxFQUFFLG9EQUFTLENBQUMsV0FBVztTQUNwQztJQUNMLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsTUFBYztRQUNsQixJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLE1BQWM7UUFDckIsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUM0QztBQUk3QztJQUFxQyxtQ0FBVztJQUFoRDs7SUFlQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLENBZm9DLHlEQUFXLEdBZS9DOzs7Ozs7Ozs7Ozs7OztBQ25CRDtBQUFBO0FBQUE7SUFBQTtJQUdBLENBQUM7SUFGRyxzQkFBVywyQkFBYzthQUF6QixjQUFzQyxPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzdELHNCQUFXLHdCQUFXO2FBQXRCLGNBQW1DLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDMUQsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ0ZEO0FBQUE7QUFBQSxJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDbkIscURBQVE7SUFDUixtREFBTztBQUNYLENBQUMsRUFIVyxXQUFXLEtBQVgsV0FBVyxRQUd0Qjs7Ozs7Ozs7Ozs7OztBQ0pEO0FBQUE7QUFBQTtJQUNJLGVBQWU7SUFDZixzREFBc0Q7SUFDdEQseUdBQXlHO0lBQ3pHLElBQUk7SUFFSix5QkFBeUI7SUFDekIsMENBQTBDO0lBQzFDLElBQUk7SUFFSixrQkFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLDRHQUE0RyxDQUFDO0lBQzNJLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sSUFBWTtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLElBQUksbURBQStDLE9BQU8sV0FBUTtJQUNqRyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjRDO0FBQ1A7QUFFdEM7SUFBb0Msa0NBQVc7SUFJM0Msd0JBQVksZUFBZ0M7UUFBNUM7UUFDSSxnRUFBZ0U7UUFDaEUsa0JBQU0sZUFBZSxDQUFDLFNBT3pCO1FBWEQsaUJBQVcsR0FBRyxrREFBVyxDQUFDLE9BQU8sQ0FBQztRQUs5QixLQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUM7UUFFbEQsV0FBVyxDQUFDO1lBQ1IsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFFZCxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLE1BQWM7UUFDbEIsSUFBSSxVQUFVLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRU8sb0NBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFFO0lBQzVFLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0F2Qm1DLHlEQUFXLEdBdUI5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHsgQWNjb3VudExpc3QgfSBmcm9tICcuL3NjcmlwdHMvYWNjb3VudC1saXN0JztcbmltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSAnLi9zY3JpcHRzL2JhbmstYWNjb3VudCc7XG5pbXBvcnQgeyBDaGVja2luZ0FjY291bnQgfSBmcm9tICcuL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudCc7XG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gJy4vc2NyaXB0cy9lbnVtcyc7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vc2NyaXB0cy9yZW5kZXJlcic7XG5pbXBvcnQgeyBTYXZpbmdzQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9zYXZpbmdzLWFjY291bnRzJztcblxuY2xhc3MgTWFpbiB7XG4gICAgY2hlY2tpbmdBY2NvdW50OiBDaGVja2luZ0FjY291bnQ7XG4gICAgc2F2aW5nc0FjY291bnQ6IFNhdmluZ3NBY2NvdW50O1xuICAgIGN1cnJlbnRBY2NvdW50OiBCYW5rQWNjb3VudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgICAgIC8vIENyZWF0ZSBDaGVja2luZ0FjY291bnQgaW5zdGFuY2VcbiAgICAgICAgdGhpcy5jaGVja2luZ0FjY291bnQgPSBuZXcgQ2hlY2tpbmdBY2NvdW50KHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6ICdKaW1teSBCb2IgQ2hlY2tpbmcnLFxuICAgICAgICAgICAgYmFsYW5jZTogNTAwLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNhdmluZ3NBY2NvdW50ID0gbmV3IFNhdmluZ3NBY2NvdW50KHtcbiAgICAgICAgICAgIGlkOiAxMDAsXG4gICAgICAgICAgICB0aXRsZTogJ0ppbW15IEJvYiBTYXZpbmdzJyxcbiAgICAgICAgICAgIGJhbGFuY2U6IDUwMDAsXG4gICAgICAgICAgICBpbnRlcmVzdFJhdGU6IDIuNSxcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgaHRtbCA9IHRoaXMucmVuZGVyQWNjb3VudHMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoJzxoMj5XZWxjb21lIHRvIEFjbWUgQmFuayE8L2gyPjxiciAvPjxoNT5Zb3VyIEFjY291bnRzOjwvaDU+PGJyLz4nICsgaHRtbClcbiAgICB9XG5cbiAgICByZW5kZXJBY2NvdW50cygpIHtcbiAgICAgICAgbGV0IGFjY3RzSHRtbDogc3RyaW5nID0gJyc7XG4gICAgICAgIGNvbnN0IGFjY0xpc3QgPSBuZXcgQWNjb3VudExpc3QoKVxuICAgICAgICBhY2NMaXN0LmFkZCh0aGlzLmNoZWNraW5nQWNjb3VudClcbiAgICAgICAgYWNjTGlzdC5hZGQodGhpcy5zYXZpbmdzQWNjb3VudCk7XG5cbiAgICAgICAgYWNjTGlzdC5nZXRBY2NvdW50cygpLmZvckVhY2goKGFjY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBhY2N0c0h0bWwgKz0gYWNjdC50aXRsZSArICc8YnIvPic7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGFjY3RzSHRtbDtcbiAgICB9XG5cbiAgICBjaGFuZ2VWaWV3KHZpZXc/OiBzdHJpbmcpIHtcbiAgICAgICAgc3dpdGNoKHZpZXcpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNraW5nJzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5jaGVja2luZ0FjY291bnQ7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3NhdmluZ3MnOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSB0aGlzLnNhdmluZ3NBY2NvdW50XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJBY2NvdW50KHRoaXMuY3VycmVudEFjY291bnQpXG4gICAgfVxuXG4gICAgcmVuZGVyQWNjb3VudChhY2NvdW50OiBCYW5rQWNjb3VudCkge1xuICAgICAgICBjb25zdCBhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlW2FjY291bnQuYWNjb3VudFR5cGVdO1xuICAgICAgICBjb25zdCBodG1sID0gYFxuICAgICAgICAgICAgICAgIDxoMz4ke2FjY291bnRUeXBlfSBBY2NvdW50PC9oMz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+T3duZXI6PC9zcGFuPiAke2FjY291bnQudGl0bGV9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkJhbGFuY2U6PC9zcGFuPiAkJHthY2NvdW50LmJhbGFuY2UudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAkPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXBvc2l0V2l0aGRyYXdhbEFtb3VudFwiPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwodHJ1ZSlcIj5EZXBvc2l0PC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbChmYWxzZSlcIj5XaXRoZHJhd2FsPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoaHRtbCk7XG4gICAgfVxuXG4gICAgZGVwb3NpdFdpdGhEcmF3YWwoZGVwb3NpdDogYm9vbGVhbikge1xuICAgICAgICBsZXQgYW1vdW50SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVwb3NpdFdpdGhkcmF3YWxBbW91bnQnKTtcbiAgICAgICAgbGV0IGFtb3VudCA9ICthbW91bnRJbnB1dC52YWx1ZTtcbiAgICAgICAgbGV0IGVycm9yO1xuICAgICAgICB0cnl7IGlmIChkZXBvc2l0KSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50LmRlcG9zaXQoYW1vdW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQud2l0aGRyYXdhbChhbW91bnQpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yID0gZXJyO1xuICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJBY2NvdW50KHRoaXMuY3VycmVudEFjY291bnQpO1xuICAgICAgICBpZihlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXJFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5jb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld1RlbXBsYXRlJykpO1xuY29uc3QgbWFpbiA9IG5ldyBNYWluKHJlbmRlcmVyKTtcblxuLy8gUXVpY2sgYW5kIGVhc3kgd2F5IHRvIGV4cG9zZSBhIGdsb2JhbCBBUEkgdGhhdCBjYW4gaG9vayB0byB0aGUgTWFpbiBvYmplY3Rcbi8vIHNvIHRoYXQgd2UgY2FuIGdldCB0byBpdCBmcm9tIGNsaWNrIGFuZCBldmVudHMgYW5kIG90aGVycy5cbi8vIFllcywgdGhlcmUgYXJlIG90aGVyIHdheXMgYnV0IHRoYXQncyBub3QgdGhlIGZvY3VzIG9mIHRoaXMgZGVtb1xuKDxhbnk+d2luZG93KS5tYWluID0gbWFpbjsiLCJpbXBvcnQgeyBCYW5rQWNjb3VudCB9IGZyb20gXCIuL2JhbmstYWNjb3VudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjY291bnRMaXN0IHtcclxuICAgIF9hY2NvdW50TGlzdDogQmFua0FjY291bnRbXSA9IFtdO1xyXG5cclxuICAgIGFkZChhY2NvdW50OiBCYW5rQWNjb3VudCkge1xyXG4gICAgICAgIHRoaXMuX2FjY291bnRMaXN0LnB1c2goYWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNjb3VudHMoKTogQmFua0FjY291bnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjY291bnRMaXN0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQWNjb3VudCwgQWNjb3VudEluZm8sIEFjY291bnRTZXR0aW5ncyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEFjY291bnRUeXBlIH0gZnJvbSAnLi9lbnVtcyc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhbmtBY2NvdW50IGltcGxlbWVudHMgQWNjb3VudCB7XHJcbiAgICBwcml2YXRlIF9iYWxhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBhY2NvdW50VHlwZTogQWNjb3VudFR5cGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBBY2NvdW50U2V0dGluZ3MpIHsgXHJcbiAgICAgICAgdGhpcy5pZCA9IGFjY291bnRTZXR0aW5ncy5pZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gYWNjb3VudFNldHRpbmdzLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSA9IGFjY291bnRTZXR0aW5ncy5iYWxhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBiYWxhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYWxhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGJhbGFuY2UodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID49IDApIHtcclxuICAgICAgICB0aGlzLl9iYWxhbmNlID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYmFsYW5jZSBpcyB6ZXJvISBZb3UgbmVlZCB0byBmaWd1cmUgb3V0IHlvdXIgYnVkZ2V0LicpXHJcbiAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIGdldEFjY291bnRJbmZvKCk6IEFjY291bnRJbmZvPHN0cmluZywgbnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcm91dGluZ051bWJlcjogQ29uc3RhbnRzLlJPVVRJTkdfTlVNQkVSLFxyXG4gICAgICAgICAgICBiYW5rTnVtYmVyOiBDb25zdGFudHMuQkFOS19OVU1CRVIgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9iYWxhbmNlICs9IGFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICB3aXRoZHJhd2FsKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlIC09IGFtb3VudDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSBcIi4vYmFuay1hY2NvdW50XCI7XHJcbmltcG9ydCB7IEFjY291bnRUeXBlIH0gZnJvbSBcIi4vZW51bXNcIjtcclxuaW1wb3J0IHsgQWNjb3VudEluZm8sIEFjY291bnRTZXR0aW5ncyB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2luZ0FjY291bnQgZXh0ZW5kcyBCYW5rQWNjb3VudHtcclxuICAgIGFjY291bnRUeXBlOiBBY2NvdW50VHlwZS5DaGVja2luZztcclxuXHJcbiAgICAvL25vIGxvbmdlciBuZWVkIHRoaXMgY29kZSBiZWNhdXNlIGdldEFjY291bnRJbmZvIGlzIG1ldGhvZCBvbiBiYXNlIGNsYXNzIGJhbmtBY2NvdW50XHJcbiAgICAvLyBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncykge1xyXG4gICAgLy8gICAgIHN1cGVyKGFjY291bnRTZXR0aW5ncyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0QWNjb3VudEluZm8oKTogQWNjb3VudEluZm88bnVtYmVyLCBudW1iZXI+IHtcclxuICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICByb3V0aW5nTnVtYmVyOiAxMjM0LFxyXG4gICAgLy8gICAgICAgICBiYW5rTnVtYmVyOiA0MzIxXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgICBzdGF0aWMgZ2V0IFJPVVRJTkdfTlVNQkVSKCk6IHN0cmluZyB7IHJldHVybiAnMTIzMUE0NDMzWTInOyB9XHJcbiAgICBzdGF0aWMgZ2V0IEJBTktfTlVNQkVSKCk6IG51bWJlciB7IHJldHVybiAxMDAwMDgzNzQ7IH1cclxufSIsIlxyXG5leHBvcnQgZW51bSBBY2NvdW50VHlwZSB7XHJcbiAgICBDaGVja2luZyxcclxuICAgIFNhdmluZ3MsXHJcbn0iLCJleHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICAgIC8vIGluc3RhbmNlIHdheVxuICAgIC8vIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld1RlbXBsYXRlOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIC8vICAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSAnPGgyPldlbGNvbWUgdG8gQWNtZSBCYW5rITwvaDI+PGJyIC8+PGg1PllvdXIgQWNjb3VudHM6PC9oNT48YnIgLz4nO1xuICAgIC8vIH1cblxuICAgIC8vIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICAvLyAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAvLyB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHsgXG4gICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gJzxoMj5XZWxjb21lIHRvIEFjbWUgQmFuayE8L2gyPi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uPGJyIC8+PGg1PllvdXIgQWNjb3VudHM6PC9oNT48YnIgLz4nO1xuICAgIH1cblxuICAgIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDsgXG4gICAgfVxuXG4gICAgcmVuZGVyRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmlld1RlbXBsYXRlLmlubmVySFRNTCArPSBgPGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXG4gICAgfVxufSIsImltcG9ydCB7IEFjY291bnRTZXR0aW5ncyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSBcIi4vYmFuay1hY2NvdW50XCI7XHJcbmltcG9ydCB7IEFjY291bnRUeXBlIH0gZnJvbSAnLi9lbnVtcyc7IFxyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmluZ3NBY2NvdW50IGV4dGVuZHMgQmFua0FjY291bnQge1xyXG4gICAgcHJpdmF0ZSBfaW50ZXJlc3RSYXRlOiBudW1iZXI7XHJcbiAgICBhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlLlNhdmluZ3M7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBBY2NvdW50U2V0dGluZ3MpIHtcclxuICAgICAgICAvL3Bhc3NpbmcgYWNjb3VudFNldHRpbmdzIGludG8gdGhlIGJhbmtBY2NvdW50IGNsYXNzIG9mIGluc3RhbmNlXHJcbiAgICAgICAgc3VwZXIoYWNjb3VudFNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLl9pbnRlcmVzdFJhdGUgPSBhY2NvdW50U2V0dGluZ3MuaW50ZXJlc3RSYXRlO1xyXG4gICAgXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEludGVyZXN0KCk7XHJcbiAgICAgICAgfSwgNjAwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZXBvc2l0KGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG5ld0FtbW91bnQgPSBhbW91bnQgKyAoYW1vdW50ICogKHRoaXMuX2ludGVyZXN0UmF0ZSAvIDEwMCApKVxyXG4gICAgICAgIHRoaXMuYmFsYW5jZSArPSBuZXdBbW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkSW50ZXJlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gdGhpcy5iYWxhbmNlICsgdGhpcy5iYWxhbmNlICogKHRoaXMuX2ludGVyZXN0UmF0ZSAvIDEwMCApXHJcbiAgICB9ICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9