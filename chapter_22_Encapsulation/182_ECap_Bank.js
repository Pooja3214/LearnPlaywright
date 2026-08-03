class ICICI{
    #balance; // private in JS and TS

constuctor(name, balance){
    this.name=name;
    this.#balance=balance;
}

    getBalance(){
return this.#balance;
    }

    setBalance(balance, isCashier){
if(isCashier){
    this.#balance=balance;
}else
{
    console.log("Not allowed");
    
}
    }
}

let p=new ICICI("Pooja", "100000");
console.log(p.getBalance());

p.setBalance(1000000, false);
console.log(p.getBalance());


let m=new ICICI("Munish",20000);

m.setBalance(30000,true);
console.log(m.getBalance());

