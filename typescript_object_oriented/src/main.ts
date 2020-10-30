import { AccountList } from './scripts/account-list';
import { BankAccount } from './scripts/bank-account';
import { CheckingAccount } from './scripts/checking-account';
import { AccountType } from './scripts/enums';
import { Renderer } from './scripts/renderer';
import { SavingsAccount } from './scripts/savings-accounts';

class Main {
    checkingAccount: CheckingAccount;
    savingsAccount: SavingsAccount;
    currentAccount: BankAccount;

    constructor(private renderer: Renderer) {
        // Create CheckingAccount instance
        this.checkingAccount = new CheckingAccount({
            id: 1,
            title: 'Jimmy Bob Checking',
            balance: 500,
        });

        this.savingsAccount = new SavingsAccount({
            id: 100,
            title: 'Jimmy Bob Savings',
            balanc: 5000
        })

        let html = this.renderAccounts();
        this.renderer.render('<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br/>' + html)
    }

    renderAccounts() {
        let acctsHtml: string = '';
        const accList = new AccountList()
        accList.add(this.checkingAccount)
        accList.add(this.savingsAccount);

        accList.getAccounts().forEach((acct, index) => {
            acctsHtml += acct.title + '<br/>';
        })

        return acctsHtml;
    }

    changeView(view?: string) {
        switch(view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break
            case 'savings':
                this.currentAccount = this.savingsAccount
                break;
        }
        this.renderAccount(this.currentAccount)
    }

    renderAccount(account: BankAccount) {
        const accountType = AccountType[account.accountType];
        const html = `
                <h3>${accountType} Account</h3>
                <br />
                <span class="label">Owner:</span> ${account.title}
                <br />
                <span class="label">Balance:</span> $${account.balance.toFixed(2)}
                <br /><br />
                $<input type="text" id="depositWithdrawalAmount">&nbsp;&nbsp;
                <button onclick="main.depositWithDrawal(true)">Deposit</button>&nbsp;
                <button onclick="main.depositWithDrawal(false)">Withdrawal</button>&nbsp;
            `;
            this.renderer.render(html);
    }

    depositWithDrawal(deposit: boolean) {
        let amountInput: HTMLInputElement = document.querySelector('#depositWithdrawalAmount');
        let amount = +amountInput.value;
        let error;
        try{ if (deposit) {
            this.checkingAccount.deposit(amount);
        }
        else {
            this.checkingAccount.withdrawal(amount);
        }
    } catch (err) {
        error = err;
    }
        this.renderAccount(this.currentAccount);
        if(error) {
            this.renderer.renderError(error.message);
        }

    }
}

const renderer = new Renderer(document.querySelector('#viewTemplate'));
const main = new Main(renderer);

// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
(<any>window).main = main;