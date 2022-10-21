"use strict";
let s;
class Account {
    constructor(accNom, balance) {
        this.Acc_nuo = accNom;
        this.Balance = balance;
    }
    debitAmount() {
        return;
    }
    creditAmount() {
        return;
    }
    getBalance() {
        return;
    }
}
class saving_Account extends Account {
    constructor(MINbalance, accnum, balance) {
        super(accnum, balance);
        this.Min_Balance = MINbalance;
    }
}
class current_Account extends Account {
    constructor(rate, accnum, balance) {
        super(accnum, balance);
        this.Interest_rate = rate;
    }
}
//# sourceMappingURL=index.js.map