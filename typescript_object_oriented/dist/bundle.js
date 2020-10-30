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
    function CheckingAccount(accountSettings) {
        return _super.call(this, accountSettings) || this;
    }
    CheckingAccount.prototype.getAccountInfo = function () {
        return {
            routing: 'routing number ...'
        };
    };
    return CheckingAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"]));



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
        _this._interestRate = accountSettings._interestRate;
        setInterval(function () {
            _this.addInterest();
        }, 60000);
        return _this;
    }
    SavingsAccount.prototype.getAccountInfo = function () {
        return {
            routing: 'routing number ....'
        };
    };
    SavingsAccount.prototype.addInterest = function () {
        this.balance = this.balance + this.balance * (this._interestRate / 100);
    };
    return SavingsAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"]));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWNjb3VudC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JhbmstYWNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jaGVja2luZy1hY2NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VudW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NhdmluZ3MtYWNjb3VudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7QUFFUTtBQUNmO0FB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Ozs7Ozs7O0FDckI0QztBQUNQO0FBRXRDO0lBQW9DLGtDQUFXO0lBSTNDLHdCQUFZLGVBQW9CO1FBQWhDO1FBQ0ksZ0VBQWdFO1FBQ2hFLGtCQUFNLGVBQWUsQ0FBQyxTQU96QjtRQVhELGlCQUFXLEdBQUcsa0RBQVcsQ0FBQyxPQUFPLENBQUM7UUFLOUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBRW5ELFdBQVcsQ0FBQztZQUNSLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBRWQsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDSSxPQUFPO1lBQ0gsT0FBTyxFQUFFLHFCQUFxQjtTQUNqQztJQUNMLENBQUM7SUFFTyxvQ0FBVyxHQUFuQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUU7SUFDNUUsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxDQXhCbUMseURBQVcsR0F3QjlDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgeyBBY2NvdW50TGlzdCB9IGZyb20gJy4vc2NyaXB0cy9hY2NvdW50LWxpc3QnO1xuaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tICcuL3NjcmlwdHMvYmFuay1hY2NvdW50JztcbmltcG9ydCB7IENoZWNraW5nQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9jaGVja2luZy1hY2NvdW50JztcbmltcG9ydCB7IEFjY291bnRUeXBlIH0gZnJvbSAnLi9zY3JpcHRzL2VudW1zJztcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9zY3JpcHRzL3JlbmRlcmVyJztcbmltcG9ydCB7IFNhdmluZ3NBY2NvdW50IH0gZnJvbSAnLi9zY3JpcHRzL3NhdmluZ3MtYWNjb3VudHMnO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjaGVja2luZ0FjY291bnQ6IENoZWNraW5nQWNjb3VudDtcbiAgICBzYXZpbmdzQWNjb3VudDogU2F2aW5nc0FjY291bnQ7XG4gICAgY3VycmVudEFjY291bnQ6IEJhbmtBY2NvdW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICAgICAgLy8gQ3JlYXRlIENoZWNraW5nQWNjb3VudCBpbnN0YW5jZVxuICAgICAgICB0aGlzLmNoZWNraW5nQWNjb3VudCA9IG5ldyBDaGVja2luZ0FjY291bnQoe1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICB0aXRsZTogJ0ppbW15IEJvYiBDaGVja2luZycsXG4gICAgICAgICAgICBiYWxhbmNlOiA1MDAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2F2aW5nc0FjY291bnQgPSBuZXcgU2F2aW5nc0FjY291bnQoe1xuICAgICAgICAgICAgaWQ6IDEwMCxcbiAgICAgICAgICAgIHRpdGxlOiAnSmltbXkgQm9iIFNhdmluZ3MnLFxuICAgICAgICAgICAgYmFsYW5jZTogNTAwMCxcbiAgICAgICAgICAgIGludGVyZXN0UmF0ZTogMi41LFxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLnJlbmRlckFjY291bnRzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCc8aDI+V2VsY29tZSB0byBBY21lIEJhbmshPC9oMj48YnIgLz48aDU+WW91ciBBY2NvdW50czo8L2g1Pjxici8+JyArIGh0bWwpXG4gICAgfVxuXG4gICAgcmVuZGVyQWNjb3VudHMoKSB7XG4gICAgICAgIGxldCBhY2N0c0h0bWw6IHN0cmluZyA9ICcnO1xuICAgICAgICBjb25zdCBhY2NMaXN0ID0gbmV3IEFjY291bnRMaXN0KClcbiAgICAgICAgYWNjTGlzdC5hZGQodGhpcy5jaGVja2luZ0FjY291bnQpXG4gICAgICAgIGFjY0xpc3QuYWRkKHRoaXMuc2F2aW5nc0FjY291bnQpO1xuXG4gICAgICAgIGFjY0xpc3QuZ2V0QWNjb3VudHMoKS5mb3JFYWNoKChhY2N0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYWNjdHNIdG1sICs9IGFjY3QudGl0bGUgKyAnPGJyLz4nO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBhY2N0c0h0bWw7XG4gICAgfVxuXG4gICAgY2hhbmdlVmlldyh2aWV3Pzogc3RyaW5nKSB7XG4gICAgICAgIHN3aXRjaCh2aWV3KSB7XG4gICAgICAgICAgICBjYXNlICdjaGVja2luZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IHRoaXMuY2hlY2tpbmdBY2NvdW50O1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdzYXZpbmdzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5zYXZpbmdzQWNjb3VudFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyQWNjb3VudCh0aGlzLmN1cnJlbnRBY2NvdW50KVxuICAgIH1cblxuICAgIHJlbmRlckFjY291bnQoYWNjb3VudDogQmFua0FjY291bnQpIHtcbiAgICAgICAgY29uc3QgYWNjb3VudFR5cGUgPSBBY2NvdW50VHlwZVthY2NvdW50LmFjY291bnRUeXBlXTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgICAgICA8aDM+JHthY2NvdW50VHlwZX0gQWNjb3VudDwvaDM+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPk93bmVyOjwvc3Bhbj4gJHthY2NvdW50LnRpdGxlfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5CYWxhbmNlOjwvc3Bhbj4gJCR7YWNjb3VudC5iYWxhbmNlLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgJDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVwb3NpdFdpdGhkcmF3YWxBbW91bnRcIj4mbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKHRydWUpXCI+RGVwb3NpdDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwoZmFsc2UpXCI+V2l0aGRyYXdhbDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICAgIH1cblxuICAgIGRlcG9zaXRXaXRoRHJhd2FsKGRlcG9zaXQ6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGFtb3VudElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlcG9zaXRXaXRoZHJhd2FsQW1vdW50Jyk7XG4gICAgICAgIGxldCBhbW91bnQgPSArYW1vdW50SW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBlcnJvcjtcbiAgICAgICAgdHJ5eyBpZiAoZGVwb3NpdCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudC5kZXBvc2l0KGFtb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50LndpdGhkcmF3YWwoYW1vdW50KTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvciA9IGVycjtcbiAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyQWNjb3VudCh0aGlzLmN1cnJlbnRBY2NvdW50KTtcbiAgICAgICAgaWYoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdUZW1wbGF0ZScpKTtcbmNvbnN0IG1haW4gPSBuZXcgTWFpbihyZW5kZXJlcik7XG5cbi8vIFF1aWNrIGFuZCBlYXN5IHdheSB0byBleHBvc2UgYSBnbG9iYWwgQVBJIHRoYXQgY2FuIGhvb2sgdG8gdGhlIE1haW4gb2JqZWN0XG4vLyBzbyB0aGF0IHdlIGNhbiBnZXQgdG8gaXQgZnJvbSBjbGljayBhbmQgZXZlbnRzIGFuZCBvdGhlcnMuXG4vLyBZZXMsIHRoZXJlIGFyZSBvdGhlciB3YXlzIGJ1dCB0aGF0J3Mgbm90IHRoZSBmb2N1cyBvZiB0aGlzIGRlbW9cbig8YW55PndpbmRvdykubWFpbiA9IG1haW47IiwiaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tIFwiLi9iYW5rLWFjY291bnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50TGlzdCB7XHJcbiAgICBfYWNjb3VudExpc3Q6IEJhbmtBY2NvdW50W10gPSBbXTtcclxuXHJcbiAgICBhZGQoYWNjb3VudDogQmFua0FjY291bnQpIHtcclxuICAgICAgICB0aGlzLl9hY2NvdW50TGlzdC5wdXNoKGFjY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjY291bnRzKCk6IEJhbmtBY2NvdW50W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY2NvdW50TGlzdDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFjY291bnRUeXBlIH0gZnJvbSAnLi9lbnVtcyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFua0FjY291bnQge1xyXG4gICAgcHJpdmF0ZSBfYmFsYW5jZTogbnVtYmVyID0gMDtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgYWNjb3VudFR5cGU6IEFjY291bnRUeXBlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRTZXR0aW5nczogYW55KSB7IFxyXG4gICAgICAgIHRoaXMuaWQgPSBhY2NvdW50U2V0dGluZ3MuaWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGFjY291bnRTZXR0aW5ncy50aXRsZTtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSBhY2NvdW50U2V0dGluZ3MuYmFsYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYmFsYW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFsYW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBiYWxhbmNlKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5fYmFsYW5jZSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JhbGFuY2UgaXMgemVybyEgWW91IG5lZWQgdG8gZmlndXJlIG91dCB5b3VyIGJ1ZGdldC4nKVxyXG4gICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBhYnN0cmFjdCBnZXRBY2NvdW50SW5mbygpOiBhbnlcclxuXHJcbiAgICBkZXBvc2l0KGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fYmFsYW5jZSArPSBhbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgd2l0aGRyYXdhbChhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYW5rQWNjb3VudCB9IGZyb20gXCIuL2JhbmstYWNjb3VudFwiO1xyXG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gXCIuL2VudW1zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tpbmdBY2NvdW50IGV4dGVuZHMgQmFua0FjY291bnR7XHJcbiAgICBhY2NvdW50VHlwZTogQWNjb3VudFR5cGUuQ2hlY2tpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBhbnkpIHtcclxuICAgICAgICBzdXBlcihhY2NvdW50U2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjY291bnRJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJvdXRpbmc6ICdyb3V0aW5nIG51bWJlciAuLi4nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiXHJcbmV4cG9ydCBlbnVtIEFjY291bnRUeXBlIHtcclxuICAgIENoZWNraW5nLFxyXG4gICAgU2F2aW5ncyxcclxufSIsImV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gICAgLy8gaW5zdGFuY2Ugd2F5XG4gICAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3VGVtcGxhdGU6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgLy8gICAgIHRoaXMudmlld1RlbXBsYXRlLmlubmVySFRNTCA9ICc8aDI+V2VsY29tZSB0byBBY21lIEJhbmshPC9oMj48YnIgLz48aDU+WW91ciBBY2NvdW50czo8L2g1PjxiciAvPic7XG4gICAgLy8gfVxuXG4gICAgLy8gcmVuZGVyKGh0bWw6IHN0cmluZykge1xuICAgIC8vICAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIC8vIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld1RlbXBsYXRlOiBIVE1MRGl2RWxlbWVudCkgeyBcbiAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSAnPGgyPldlbGNvbWUgdG8gQWNtZSBCYW5rITwvaDI+Li4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi48YnIgLz48aDU+WW91ciBBY2NvdW50czo8L2g1PjxiciAvPic7XG4gICAgfVxuXG4gICAgcmVuZGVyKGh0bWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sOyBcbiAgICB9XG5cbiAgICByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MICs9IGA8YnIgLz48YnIgLz48ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tIFwiLi9iYW5rLWFjY291bnRcIjtcclxuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tICcuL2VudW1zJzsgXHJcblxyXG5leHBvcnQgY2xhc3MgU2F2aW5nc0FjY291bnQgZXh0ZW5kcyBCYW5rQWNjb3VudCB7XHJcbiAgICBwcml2YXRlIF9pbnRlcmVzdFJhdGU6IG51bWJlcjtcclxuICAgIGFjY291bnRUeXBlID0gQWNjb3VudFR5cGUuU2F2aW5ncztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IGFueSkge1xyXG4gICAgICAgIC8vcGFzc2luZyBhY2NvdW50U2V0dGluZ3MgaW50byB0aGUgYmFua0FjY291bnQgY2xhc3Mgb2YgaW5zdGFuY2VcclxuICAgICAgICBzdXBlcihhY2NvdW50U2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX2ludGVyZXN0UmF0ZSA9IGFjY291bnRTZXR0aW5ncy5faW50ZXJlc3RSYXRlO1xyXG4gICAgXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEludGVyZXN0KCk7XHJcbiAgICAgICAgfSwgNjAwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2NvdW50SW5mbygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByb3V0aW5nOiAncm91dGluZyBudW1iZXIgLi4uLidcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRJbnRlcmVzdCgpIHtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmJhbGFuY2UgKyB0aGlzLmJhbGFuY2UgKiAodGhpcy5faW50ZXJlc3RSYXRlIC8gMTAwIClcclxuICAgIH0gICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=