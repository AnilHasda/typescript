class BankAccount{
    constructor(private _balance:number=0){}
    get balance(){
        return this._balance;
    }
    set balance(balance){
if(balance<0){
    console.log("balance most be more than zero");
}
    }
}
let personBalance=new BankAccount(1000);
console.log(personBalance.balance);
personBalance.balance=-100;
console.log(personBalance.balance);
