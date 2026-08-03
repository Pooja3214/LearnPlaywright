class BankAccount{
    #balance= 0;
    //private field hidden

    deposit(amount){
        if(amount > 0){
            this.#balance + amount;
        }
    }

    getBalance(){
        return this.#balance; //controlled access
    }
}

const account=new BankAccount();
account.deposit(100);
console.log(account.getBalance());

console.log(account.balance); // undefined - private field

