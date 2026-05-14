var v=10;
let l=30;
const c=3.14;

var browser="Chrome";
browser="Firefox"; // var allows reassignment
var browser="Edge"; // var allows redeclaration

//for,functions

var testCase=["login","signup","logout"];

for(var i=0;i<testCase.length;i++){
    console.log("Running testcase:" +testCase[i]);
}

console.log("Loop counter leaked outside:" +i); // i is accessible here due to var hoisting

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from Function");
}


say();
say();