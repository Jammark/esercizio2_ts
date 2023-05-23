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

    deposit(amount: number):void{
        this.totalBalance += amount;
        console.log(`Depositati ${amount} euro.`);
    }

    withdraw(amount: number):void{
        this.totalBalance -= amount;
        console.log(`Ritirati ${amount} euro.`);
    }

    saldo():string{
        return `Il saldo corrente è di ${Math.trunc(this.totalBalance/10) + this.totalBalance} euro.`
    }
}

let accountMother = new BankAccount('Maria');
let accountSon = new BankAccount('Fabio');

console.log(accountMother.descrizione());
accountMother.deposit(1000);
accountMother.withdraw(200);
accountMother.withdraw(400);
console.log(accountMother.saldo());

console.log(accountSon.descrizione());
accountSon.deposit(1000);
accountSon.withdraw(500);
accountSon.withdraw(300);
console.log(accountSon.saldo());