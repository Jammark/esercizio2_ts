"use strict";
class BankAccount {
    constructor(_ownerName) {
        this.ownerName = _ownerName;
        this.totalBalance = BankAccount.balanceInit;
    }
    descrizione() {
        return 'Conto corrente di ' + this.ownerName;
    }
    oneDeposit(amount) {
        this.totalBalance += amount;
        console.log(`Depositati ${amount} euro.`);
        return this.totalBalance;
    }
    oneWithdraw(amount) {
        this.totalBalance -= amount;
        console.log(`Ritirati ${amount} euro.`);
    }
    twoDeposit(amount) {
        return this.oneDeposit(amount);
    }
    twoWithdraw(amount) {
        this.oneWithdraw(amount);
    }
    addInterest() {
        return Math.trunc(this.totalBalance / 10) + this.totalBalance;
    }
    saldo() {
        return `Il saldo corrente è di ${this.addInterest()} euro.`;
    }
}
BankAccount.balanceInit = 0;
let accountMother = new BankAccount('Maria');
let accountSon = new BankAccount('Fabio');
console.log(accountMother.descrizione());
accountMother.oneDeposit(1000);
accountMother.oneWithdraw(200);
accountMother.twoDeposit(300);
accountMother.twoWithdraw(400);
console.log(accountMother.saldo());
console.log(accountSon.descrizione());
accountSon.oneDeposit(1000);
accountSon.oneWithdraw(500);
accountSon.twoDeposit(300);
accountSon.twoWithdraw(300);
console.log(accountSon.saldo());
