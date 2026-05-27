// Arrow function
// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
// 

const greet=((name)=> "Hi " + name);
let r= greet("Pooja");
console.log(r);

const doubleIt=(n=>n*2);
console.log(doubleIt(3));

const printIt=name=> console.log(name);
printIt("Priya");