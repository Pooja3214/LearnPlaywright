//And maximum between the three numbers also by using ternery op

let a=12;
let b=10;
let c=23;

let max= a>b ? (a>c ? a: c) :(b>c ? b: c);
console.log("Maximum between three number:", max);