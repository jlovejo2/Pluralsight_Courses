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
/* harmony import */ var _scripts_atm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/atm */ "./src/scripts/atm.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var Main = /** @class */ (function () {
    function Main(renderer) {
        this.renderer = renderer;
    }
    Main.prototype.loadAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('/data.json')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_1__["CheckingAccount"](__assign({}, data.checkingAccount));
                        this.savingsAccount = new _scripts_savings_accounts__WEBPACK_IMPORTED_MODULE_4__["SavingsAccount"](__assign({}, data.savingsAccount));
                        this.atm = new _scripts_atm__WEBPACK_IMPORTED_MODULE_5__["ATM"](this.checkingAccount);
                        html = this.renderAccounts();
                        this.renderer.render("\n        <h2>Welcome to Acme Bank!</h2><br />\n        <h5>Your Accounts:</h5><br/>\n        " + html);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingsAccount;
                break;
            case 'atm':
                this.currentAccount = this.checkingAccount;
                this.renderAtm();
                return;
        }
        this.renderAccount(this.currentAccount);
    };
    Main.prototype.renderAtm = function () {
        var html = "\n                <h3>ATM</h3>\n                <image src=\"src/images/atm.jpg\" height=\"150\">\n                <br /><br />\n                Current Checking Account Balance: $" + this.checkingAccount.balance + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true, true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false, true)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
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
    Main.prototype.renderAccount = function (account) {
        console.log('account stuff: ', account);
        var accountType = _scripts_enums__WEBPACK_IMPORTED_MODULE_2__["AccountType"][account.accountType];
        var html = "\n                <h3>" + accountType + " Account</h3>\n                <br />\n                <span class=\"label\">Owner:</span> " + account.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + account.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit, atm) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amount = +amountInput.value;
        var error;
        try {
            if (deposit) {
                if (atm) {
                    this.atm.deposit(amount);
                }
                else {
                    this.currentAccount.deposit(amount);
                }
            }
            else {
                if (atm) {
                    this.atm.withdrawal(amount);
                }
                else {
                    this.currentAccount.withdrawal(amount);
                }
            }
        }
        catch (err) {
            error = err;
        }
        atm ? this.renderAtm() : this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
var renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__["Renderer"](document.querySelector('#viewTemplate'));
var main = new Main(renderer);
main.loadAccounts();
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

/***/ "./src/scripts/atm.ts":
/*!****************************!*\
  !*** ./src/scripts/atm.ts ***!
  \****************************/
/*! exports provided: ATM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATM", function() { return ATM; });
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


var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    //no longer need this code because getAccountInfo is method on base class bankAccount
    function CheckingAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Checking;
        return _this;
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
        this.viewTemplate.innerHTML = "\n    <h2>Welcome to Acme Bank!</h2>\n    .........................................\n    <br /><h5>Your Accounts:</h5><br />";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWNjb3VudC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2F0bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYW5rLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2F2aW5ncy1hY2NvdW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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R0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBRTtJQUM1RSxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLENBdkJtQyx5REFBVyxHQXVCOUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IEFjY291bnRMaXN0IH0gZnJvbSAnLi9zY3JpcHRzL2FjY291bnQtbGlzdCc7XG5pbXBvcnQgeyBCYW5rQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9iYW5rLWFjY291bnQnO1xuaW1wb3J0IHsgQ2hlY2tpbmdBY2NvdW50IH0gZnJvbSAnLi9zY3JpcHRzL2NoZWNraW5nLWFjY291bnQnO1xuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tICcuL3NjcmlwdHMvZW51bXMnO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3NjcmlwdHMvcmVuZGVyZXInO1xuaW1wb3J0IHsgU2F2aW5nc0FjY291bnQgfSBmcm9tICcuL3NjcmlwdHMvc2F2aW5ncy1hY2NvdW50cyc7XG5pbXBvcnQgeyBBVE0gfSBmcm9tICcuL3NjcmlwdHMvYXRtJztcblxuY2xhc3MgTWFpbiB7XG4gICAgY2hlY2tpbmdBY2NvdW50OiBDaGVja2luZ0FjY291bnQ7XG4gICAgc2F2aW5nc0FjY291bnQ6IFNhdmluZ3NBY2NvdW50O1xuICAgIGN1cnJlbnRBY2NvdW50OiBCYW5rQWNjb3VudDtcbiAgICBhdG06IEFUTTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7IH1cblxuICAgICAgICBhc3luYyBsb2FkQWNjb3VudHMoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvZGF0YS5qc29uJyk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgdGhpcy5jaGVja2luZ0FjY291bnQgPSBuZXcgQ2hlY2tpbmdBY2NvdW50KHsuLi5kYXRhLmNoZWNraW5nQWNjb3VudH0pO1xuICAgICAgICAgICAgdGhpcy5zYXZpbmdzQWNjb3VudCA9IG5ldyBTYXZpbmdzQWNjb3VudCh7Li4uZGF0YS5zYXZpbmdzQWNjb3VudH0pO1xuICAgICAgICAgICAgdGhpcy5hdG0gPSBuZXcgQVRNKHRoaXMuY2hlY2tpbmdBY2NvdW50KVxuXG4gICAgICAgIGxldCBodG1sID0gdGhpcy5yZW5kZXJBY2NvdW50cygpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihgXG4gICAgICAgIDxoMj5XZWxjb21lIHRvIEFjbWUgQmFuayE8L2gyPjxiciAvPlxuICAgICAgICA8aDU+WW91ciBBY2NvdW50czo8L2g1Pjxici8+XG4gICAgICAgICR7aHRtbH1gKVxuICAgICAgICB9XG5cbiAgICBjaGFuZ2VWaWV3KHZpZXc/OiBzdHJpbmcpIHtcbiAgICAgICAgc3dpdGNoKHZpZXcpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNraW5nJzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5jaGVja2luZ0FjY291bnQ7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3NhdmluZ3MnOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSB0aGlzLnNhdmluZ3NBY2NvdW50XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhdG0nOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSB0aGlzLmNoZWNraW5nQWNjb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckF0bSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudClcbiAgICB9XG5cbiAgICByZW5kZXJBdG0oKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgICAgICAgICAgPGgzPkFUTTwvaDM+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvYXRtLmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIEN1cnJlbnQgQ2hlY2tpbmcgQWNjb3VudCBCYWxhbmNlOiAkJHt0aGlzLmNoZWNraW5nQWNjb3VudC5iYWxhbmNlfVxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlcG9zaXRXaXRoZHJhd2FsQW1vdW50XCI+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbCh0cnVlLCB0cnVlKVwiPkRlcG9zaXQ8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKGZhbHNlLCB0cnVlKVwiPldpdGhkcmF3YWw8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgIGA7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICAgIH1cblxuICAgIHJlbmRlckFjY291bnRzKCkge1xuICAgICAgICBsZXQgYWNjdHNIdG1sOiBzdHJpbmcgPSAnJztcbiAgICAgICAgY29uc3QgYWNjTGlzdCA9IG5ldyBBY2NvdW50TGlzdCgpXG4gICAgICAgIGFjY0xpc3QuYWRkKHRoaXMuY2hlY2tpbmdBY2NvdW50KVxuICAgICAgICBhY2NMaXN0LmFkZCh0aGlzLnNhdmluZ3NBY2NvdW50KTtcblxuICAgICAgICBhY2NMaXN0LmdldEFjY291bnRzKCkuZm9yRWFjaCgoYWNjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGFjY3RzSHRtbCArPSBhY2N0LnRpdGxlICsgJzxici8+JztcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gYWNjdHNIdG1sO1xuICAgIH1cblxuICAgIHJlbmRlckFjY291bnQoYWNjb3VudDogQmFua0FjY291bnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FjY291bnQgc3R1ZmY6ICcsIGFjY291bnQpXG4gICAgICAgIGNvbnN0IGFjY291bnRUeXBlID0gQWNjb3VudFR5cGVbYWNjb3VudC5hY2NvdW50VHlwZV07XG4gICAgICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgICAgICAgICAgPGgzPiR7YWNjb3VudFR5cGV9IEFjY291bnQ8L2gzPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Pd25lcjo8L3NwYW4+ICR7YWNjb3VudC50aXRsZX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+QmFsYW5jZTo8L3NwYW4+ICQke2FjY291bnQuYmFsYW5jZS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlcG9zaXRXaXRoZHJhd2FsQW1vdW50XCI+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbCh0cnVlKVwiPkRlcG9zaXQ8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKGZhbHNlKVwiPldpdGhkcmF3YWw8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihodG1sKTtcbiAgICB9XG5cbiAgICBkZXBvc2l0V2l0aERyYXdhbChkZXBvc2l0OiBib29sZWFuLCBhdG0/OiBib29sZWFuKSB7XG4gICAgICAgIGxldCBhbW91bnRJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXBvc2l0V2l0aGRyYXdhbEFtb3VudCcpO1xuICAgICAgICBsZXQgYW1vdW50ID0gK2Ftb3VudElucHV0LnZhbHVlO1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIHRyeXsgXG4gICAgICAgICAgICBpZiAoZGVwb3NpdCkge1xuICAgICAgICAgICAgICAgIGlmIChhdG0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdG0uZGVwb3NpdChhbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQuZGVwb3NpdChhbW91bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0bSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0bS53aXRoZHJhd2FsKGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudC53aXRoZHJhd2FsKGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICB9XG5cbiAgICAgICAgYXRtID8gdGhpcy5yZW5kZXJBdG0oKTogdGhpcy5yZW5kZXJBY2NvdW50KHRoaXMuY3VycmVudEFjY291bnQpO1xuICAgICAgICBcbiAgICAgICAgaWYoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3VGVtcGxhdGUnKSk7XG5jb25zdCBtYWluID0gbmV3IE1haW4ocmVuZGVyZXIpO1xubWFpbi5sb2FkQWNjb3VudHMoKTtcblxuLy8gUXVpY2sgYW5kIGVhc3kgd2F5IHRvIGV4cG9zZSBhIGdsb2JhbCBBUEkgdGhhdCBjYW4gaG9vayB0byB0aGUgTWFpbiBvYmplY3Rcbi8vIHNvIHRoYXQgd2UgY2FuIGdldCB0byBpdCBmcm9tIGNsaWNrIGFuZCBldmVudHMgYW5kIG90aGVycy5cbi8vIFllcywgdGhlcmUgYXJlIG90aGVyIHdheXMgYnV0IHRoYXQncyBub3QgdGhlIGZvY3VzIG9mIHRoaXMgZGVtb1xuKDxhbnk+d2luZG93KS5tYWluID0gbWFpbjsiLCJpbXBvcnQgeyBCYW5rQWNjb3VudCB9IGZyb20gXCIuL2JhbmstYWNjb3VudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjY291bnRMaXN0IHtcclxuICAgIF9hY2NvdW50TGlzdDogQmFua0FjY291bnRbXSA9IFtdO1xyXG5cclxuICAgIGFkZChhY2NvdW50OiBCYW5rQWNjb3VudCkge1xyXG4gICAgICAgIHRoaXMuX2FjY291bnRMaXN0LnB1c2goYWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNjb3VudHMoKTogQmFua0FjY291bnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjY291bnRMaXN0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGVwb3NpdFdpdGhkcmF3YWwsIEFjY291bnQgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFUTSBpbXBsZW1lbnRzIERlcG9zaXRXaXRoZHJhd2FsIHtcclxuICAgIFxyXG4gICAgLy91c2luZyBBY2NvdW50IGhlcmUgY3JlYXRlcyBhIHBvbHltb3JwaGlzbSBzaXR1YXRpb25cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3VudDogQWNjb3VudCkge31cclxuXHJcbiAgICBkZXBvc2l0IChhbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudC5kZXBvc2l0KGFtb3VudClcclxuICAgIH1cclxuXHJcbiAgICB3aXRoZHJhd2FsIChhbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudC53aXRoZHJhd2FsKGFtb3VudCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBY2NvdW50LCBBY2NvdW50SW5mbywgQWNjb3VudFNldHRpbmdzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tICcuL2VudW1zJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFua0FjY291bnQgaW1wbGVtZW50cyBBY2NvdW50IHtcclxuICAgIHByaXZhdGUgX2JhbGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGFjY291bnRUeXBlOiBBY2NvdW50VHlwZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncykgeyBcclxuICAgICAgICB0aGlzLmlkID0gYWNjb3VudFNldHRpbmdzLmlkO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBhY2NvdW50U2V0dGluZ3MudGl0bGU7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gYWNjb3VudFNldHRpbmdzLmJhbGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJhbGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhbGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBzZXQgYmFsYW5jZSh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsdWUgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuX2JhbGFuY2UgPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYmFsYW5jZSBpcyB6ZXJvISBZb3UgbmVlZCB0byBmaWd1cmUgb3V0IHlvdXIgYnVkZ2V0LicpXHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBnZXRBY2NvdW50SW5mbygpOiBBY2NvdW50SW5mbzxzdHJpbmcsIG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJvdXRpbmdOdW1iZXI6IENvbnN0YW50cy5ST1VUSU5HX05VTUJFUixcclxuICAgICAgICAgICAgYmFua051bWJlcjogQ29uc3RhbnRzLkJBTktfTlVNQkVSIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXBvc2l0KGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fYmFsYW5jZSArPSBhbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgd2l0aGRyYXdhbChhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYW5rQWNjb3VudCB9IGZyb20gXCIuL2JhbmstYWNjb3VudFwiO1xyXG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gXCIuL2VudW1zXCI7XHJcbmltcG9ydCB7IEFjY291bnRJbmZvLCBBY2NvdW50U2V0dGluZ3MgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tpbmdBY2NvdW50IGV4dGVuZHMgQmFua0FjY291bnR7XHJcbiAgICBhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlLkNoZWNraW5nO1xyXG5cclxuICAgIC8vbm8gbG9uZ2VyIG5lZWQgdGhpcyBjb2RlIGJlY2F1c2UgZ2V0QWNjb3VudEluZm8gaXMgbWV0aG9kIG9uIGJhc2UgY2xhc3MgYmFua0FjY291bnRcclxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRTZXR0aW5nczogQWNjb3VudFNldHRpbmdzKSB7XHJcbiAgICAgICAgc3VwZXIoYWNjb3VudFNldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRBY2NvdW50SW5mbygpOiBBY2NvdW50SW5mbzxudW1iZXIsIG51bWJlcj4ge1xyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgIHJvdXRpbmdOdW1iZXI6IDEyMzQsXHJcbiAgICAvLyAgICAgICAgIGJhbmtOdW1iZXI6IDQzMjFcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG59XHJcblxyXG4iLCJleHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuICAgIHN0YXRpYyBnZXQgUk9VVElOR19OVU1CRVIoKTogc3RyaW5nIHsgcmV0dXJuICcxMjMxQTQ0MzNZMic7IH1cclxuICAgIHN0YXRpYyBnZXQgQkFOS19OVU1CRVIoKTogbnVtYmVyIHsgcmV0dXJuIDEwMDAwODM3NDsgfVxyXG59IiwiXHJcbmV4cG9ydCBlbnVtIEFjY291bnRUeXBlIHtcclxuICAgIENoZWNraW5nLFxyXG4gICAgU2F2aW5ncyxcclxufSIsImV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gICAgLy8gaW5zdGFuY2Ugd2F5XG4gICAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3VGVtcGxhdGU6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgLy8gICAgIHRoaXMudmlld1RlbXBsYXRlLmlubmVySFRNTCA9ICc8aDI+V2VsY29tZSB0byBBY21lIEJhbmshPC9oMj48YnIgLz48aDU+WW91ciBBY2NvdW50czo8L2g1PjxiciAvPic7XG4gICAgLy8gfVxuXG4gICAgLy8gcmVuZGVyKGh0bWw6IHN0cmluZykge1xuICAgIC8vICAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIC8vIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld1RlbXBsYXRlOiBIVE1MRGl2RWxlbWVudCkgeyBcbiAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gICAgPGgyPldlbGNvbWUgdG8gQWNtZSBCYW5rITwvaDI+XG4gICAgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA8YnIgLz48aDU+WW91ciBBY2NvdW50czo8L2g1PjxiciAvPmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKGh0bWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sOyBcbiAgICB9XG5cbiAgICByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MICs9IGA8YnIgLz48YnIgLz48ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcbiAgICB9XG59IiwiaW1wb3J0IHsgQWNjb3VudFNldHRpbmdzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tIFwiLi9iYW5rLWFjY291bnRcIjtcclxuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tICcuL2VudW1zJzsgXHJcblxyXG5leHBvcnQgY2xhc3MgU2F2aW5nc0FjY291bnQgZXh0ZW5kcyBCYW5rQWNjb3VudCB7XHJcbiAgICBwcml2YXRlIF9pbnRlcmVzdFJhdGU6IG51bWJlcjtcclxuICAgIGFjY291bnRUeXBlID0gQWNjb3VudFR5cGUuU2F2aW5ncztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncykge1xyXG4gICAgICAgIC8vcGFzc2luZyBhY2NvdW50U2V0dGluZ3MgaW50byB0aGUgYmFua0FjY291bnQgY2xhc3Mgb2YgaW5zdGFuY2VcclxuICAgICAgICBzdXBlcihhY2NvdW50U2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX2ludGVyZXN0UmF0ZSA9IGFjY291bnRTZXR0aW5ncy5pbnRlcmVzdFJhdGU7XHJcbiAgICBcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkSW50ZXJlc3QoKTtcclxuICAgICAgICB9LCA2MDAwMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbmV3QW1tb3VudCA9IGFtb3VudCArIChhbW91bnQgKiAodGhpcy5faW50ZXJlc3RSYXRlIC8gMTAwICkpXHJcbiAgICAgICAgdGhpcy5iYWxhbmNlICs9IG5ld0FtbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRJbnRlcmVzdCgpIHtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmJhbGFuY2UgKyB0aGlzLmJhbGFuY2UgKiAodGhpcy5faW50ZXJlc3RSYXRlIC8gMTAwIClcclxuICAgIH0gICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=