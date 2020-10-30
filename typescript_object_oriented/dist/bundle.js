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
/* harmony import */ var _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/checking-account */ "./src/scripts/checking-account.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");


var Main = /** @class */ (function () {
    function Main(renderer) {
        this.renderer = renderer;
        // Create CheckingAccount instance
        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__["CheckingAccount"]({
            id: 1,
            title: 'Jimmy Bob Checking',
            balance: 500,
        });
        this.renderAccount();
    }
    Main.prototype.renderAccount = function () {
        var html = "\n                <h3>Checking Account</h3>\n                <br />\n                <span class=\"label\">Owner:</span> " + this.checkingAccount.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + this.checkingAccount.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        _scripts_renderer__WEBPACK_IMPORTED_MODULE_1__["Renderer"].render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amount = +amountInput.value;
        if (deposit) {
            this.checkingAccount.deposit(amount);
        }
        else {
            this.checkingAccount.withdrawal(amount);
        }
        this.renderAccount();
    };
    return Main;
}());
// Create main object and add handlers for it
// const renderer = new Renderer(document.querySelector('#viewTemplate'));
_scripts_renderer__WEBPACK_IMPORTED_MODULE_1__["Renderer"].viewTemplate = document.querySelector('#viewTemplate');
var main = new Main(_scripts_renderer__WEBPACK_IMPORTED_MODULE_1__["Renderer"]);
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
window.main = main;


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
    return CheckingAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"]));



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
    function Renderer() {
    }
    Renderer.render = function (html) {
        Renderer.viewTemplate.innerHTML = html;
    };
    return Renderer;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmFuay1hY2NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NoZWNraW5nLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBNkQ7QUFDZjtBQUU5QztJQUdJLGNBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEMsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSx5RUFBZSxDQUFDO1lBQ3ZDLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLG9CQUFvQjtZ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ZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IENoZWNraW5nQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9jaGVja2luZy1hY2NvdW50JztcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9zY3JpcHRzL3JlbmRlcmVyJztcblxuY2xhc3MgTWFpbiB7XG4gICAgY2hlY2tpbmdBY2NvdW50OiBDaGVja2luZ0FjY291bnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgICAgICAvLyBDcmVhdGUgQ2hlY2tpbmdBY2NvdW50IGluc3RhbmNlXG4gICAgICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50ID0gbmV3IENoZWNraW5nQWNjb3VudCh7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHRpdGxlOiAnSmltbXkgQm9iIENoZWNraW5nJyxcbiAgICAgICAgICAgIGJhbGFuY2U6IDUwMCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJBY2NvdW50KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQWNjb3VudCgpIHtcbiAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgICAgICA8aDM+Q2hlY2tpbmcgQWNjb3VudDwvaDM+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPk93bmVyOjwvc3Bhbj4gJHt0aGlzLmNoZWNraW5nQWNjb3VudC50aXRsZX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+QmFsYW5jZTo8L3NwYW4+ICQke3RoaXMuY2hlY2tpbmdBY2NvdW50LmJhbGFuY2UudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAkPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXBvc2l0V2l0aGRyYXdhbEFtb3VudFwiPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwodHJ1ZSlcIj5EZXBvc2l0PC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbChmYWxzZSlcIj5XaXRoZHJhd2FsPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICBgO1xuICAgICAgICBSZW5kZXJlci5yZW5kZXIoaHRtbCk7XG4gICAgfVxuXG4gICAgZGVwb3NpdFdpdGhEcmF3YWwoZGVwb3NpdDogYm9vbGVhbikge1xuICAgICAgICBsZXQgYW1vdW50SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVwb3NpdFdpdGhkcmF3YWxBbW91bnQnKTtcbiAgICAgICAgbGV0IGFtb3VudCA9ICthbW91bnRJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKGRlcG9zaXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50LmRlcG9zaXQoYW1vdW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50LndpdGhkcmF3YWwoYW1vdW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlckFjY291bnQoKTtcblxuICAgIH1cbn1cblxuLy8gQ3JlYXRlIG1haW4gb2JqZWN0IGFuZCBhZGQgaGFuZGxlcnMgZm9yIGl0XG4vLyBjb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld1RlbXBsYXRlJykpO1xuUmVuZGVyZXIudmlld1RlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdUZW1wbGF0ZScpO1xuY29uc3QgbWFpbiA9IG5ldyBNYWluKFJlbmRlcmVyKTtcblxuLy8gUXVpY2sgYW5kIGVhc3kgd2F5IHRvIGV4cG9zZSBhIGdsb2JhbCBBUEkgdGhhdCBjYW4gaG9vayB0byB0aGUgTWFpbiBvYmplY3Rcbi8vIHNvIHRoYXQgd2UgY2FuIGdldCB0byBpdCBmcm9tIGNsaWNrIGFuZCBldmVudHMgYW5kIG90aGVycy5cbi8vIFllcywgdGhlcmUgYXJlIG90aGVyIHdheXMgYnV0IHRoYXQncyBub3QgdGhlIGZvY3VzIG9mIHRoaXMgZGVtb1xuKDxhbnk+d2luZG93KS5tYWluID0gbWFpbjsiLCJpbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gJy4vZW51bXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhbmtBY2NvdW50IHtcclxuXHJcbiAgICBwcml2YXRlIF9iYWxhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBhY2NvdW50VHlwZTogQWNjb3VudFR5cGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBhbnkpIHsgXHJcbiAgICAgICAgdGhpcy5pZCA9IGFjY291bnRTZXR0aW5ncy5pZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gYWNjb3VudFNldHRpbmdzLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSA9IGFjY291bnRTZXR0aW5ncy5iYWxhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBiYWxhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYWxhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGJhbGFuY2UodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID49IDApIHtcclxuICAgICAgICB0aGlzLl9iYWxhbmNlID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYmFsYW5jZSBpcyB6ZXJvISBZb3UgbmVlZCB0byBmaWd1cmUgb3V0IHlvdXIgYnVkZ2V0LicpXHJcbiAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9iYWxhbmNlICs9IGFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICB3aXRoZHJhd2FsKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlIC09IGFtb3VudDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSBcIi4vYmFuay1hY2NvdW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tpbmdBY2NvdW50IGV4dGVuZHMgQmFua0FjY291bnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBhbnkpIHtcclxuICAgICAgICBzdXBlcihhY2NvdW50U2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICAvLyBpbnN0YW5jZSB3YXlcbiAgICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAvLyAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gJzxoMj5XZWxjb21lIHRvIEFjbWUgQmFuayE8L2gyPjxiciAvPjxoNT5Zb3VyIEFjY291bnRzOjwvaDU+PGJyIC8+JztcbiAgICAvLyB9XG5cbiAgICAvLyByZW5kZXIoaHRtbDogc3RyaW5nKSB7XG4gICAgLy8gICAgIHRoaXMudmlld1RlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgLy8gfVxuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgLy8gc3RhdGljIHdheVxuICAgIHN0YXRpYyB2aWV3VGVtcGxhdGU6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgc3RhdGljIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICAgICAgUmVuZGVyZXIudmlld1RlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7IFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9