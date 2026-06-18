
//A closure is when a function **remembers** variables from its outer scope even after the outer function has finished executing.


function makeCounter(start=0){
    let count=start;
    return{
        increment(){count++},
        decrement(){count--},
        get(){return count;}
    }
}

let counter=makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());//3
counter.decrement();
console.log(counter.get());//2

