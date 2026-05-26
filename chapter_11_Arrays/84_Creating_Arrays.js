let browser=["Chrome","Firefox","Edge","Safari"];

//Array constructor

let scores= new Array(3); // new keyword is used to create 
scores[0]=1;
scores[1]=2;
scores[2]=3;

let score2=new Array(2);

console.log(scores);
console.log(score2);

//Array.of() -> Creates an array from a number of arguments
let c= Array.of("Apple","Banana","Mango");
console.log(c);

// Array.from() ->Creates an array from an object

let chars=Array.from("hello");
console.log(chars);

