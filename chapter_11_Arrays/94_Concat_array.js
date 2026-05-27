let a=[1,2];
let b=[3,4];

console.log(a.concat(b));

// let c=a+b;
// console.log(c); // [1,23,4]

//spread(modern way)  concatenation
let s=[...a,...b];
console.log(s);

//Join
let j=["pass", "fail", "skip"].join("|");
console.log(j); // pass|fail|skip