let s:string;
class Account {
Acc_nuo:number;
Balance:number;
constructor(accNom:number,balance:number){
    this.Acc_nuo=accNom;
    this.Balance=balance;
}
debitAmount(){
    return ;
}
creditAmount(){
    return ;
}
getBalance(){
    return ;
}
  }
   
 interface Account{
   Date_of_opening:number;
   addCustomer():string; 
   removeCustomer():string;
 }

 class saving_Account extends Account implements Account{
    Min_Balance:number;
    constructor(MINbalance:number , accnum:number,balance:number){
        super(accnum,balance);
    this.Min_Balance= MINbalance    
    }

 }

 class current_Account extends Account implements Account{
    Interest_rate:number;
    constructor(rate:number, accnum:number,balance:number){
        super(accnum,balance);
        this.Interest_rate=rate;
    }
}