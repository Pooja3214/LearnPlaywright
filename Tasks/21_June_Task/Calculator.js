class Calculator{
constructor(a,b){
    this.a=a;
    this.b=b;
}
    subtraction(){
    return this.a-this.b;
    }

    modulus(){
return this.a%this.b;
    }

    division(){
return this.a / this.b;
    }

    multiplication(){
return this.a * this.b;
    }
}

let result= new Calculator(4,5);

console.log(result.subtraction());
console.log(result.modulus());
console.log(result.division());
console.log(result.multiplication());



