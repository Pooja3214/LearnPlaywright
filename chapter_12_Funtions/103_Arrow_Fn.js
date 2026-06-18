// Arrow function
// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
// 

// const greet=((name)=> "Hi " + name);
// let r= greet("Pooja");
// console.log(r);

const doubleIt=(n=>n*2);
console.log(doubleIt(3));

const printIt=name=> console.log(name);
printIt("Priya");

function add(a,b){
    return a+b;
}

const add2=(a,b)=> a+b; // arrow function with argument

function say(){
    console.log("Hi");
}

const say1=()=>'Hi'; // arrow function with no argument
const say2=()=>console.log("Hi");

//multi line -- need to mention return statement too
const greet= name =>{
const message="Hi"+name;
return message;
}
 
