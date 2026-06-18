let str="Login_Test_Pass_001";

//slice(start, end)
console.log(str.slice(0,5));// Login

console.log(str.slice(11)); //Pass_001

let testNumber=str.slice(-3);//001
console.log(testNumber);

//substring(start,end) - No negative
console.log(str.substring(6,10));
console.log(str.at(0));
