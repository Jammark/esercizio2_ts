class BankAccount{
    static balanceInit : number = 0;
    private totalBalance : number;
    private ownerName : string;
    constructor(_ownerName : string){
        this.ownerName = _ownerName;
        this.totalBalance = BankAccount.balanceInit;
    }

    descrizione():string{
        return 'Conto corrente di ' + this.ownerName;
    }

    oneDeposit(amount: number):number{
        this.totalBalance += amount;
        console.log(`Depositati ${amount} euro.`);
        return this.totalBalance;
    }

    oneWithdraw(amount: number):void{
        this.totalBalance -= amount;
        console.log(`Ritirati ${amount} euro.`);
    }

    twoDeposit(amount: number):number{
        return this.oneDeposit(amount);
    }

    twoWithdraw(amount: number):void{
        this.oneWithdraw(amount);
    }

    addInterest():number{
        return Math.trunc(this.totalBalance/10) + this.totalBalance;
    }

    saldo():string{
        return `Il saldo corrente è di ${this.addInterest()} euro.`
    }
}

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