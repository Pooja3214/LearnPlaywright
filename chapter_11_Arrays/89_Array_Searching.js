let results=["pass", "fail","error","skip","pass"];

// indexOf() method searches an array for an element value and returns its position.
//array.indexOf(item, start)

console.log(results.indexOf("pass")); // if element occur more than once, first occurrence prints
console.log(results.indexOf("pass",2));//2 shows the index to start the search

//Array.lastIndexOf() returns the position of the last occurrence of the specified element.

console.log(results.lastIndexOf("pass"));

//Array.includes()- allows to check if an element is present in an array

console.log(results.includes("error"));
console.log(results.includes("Block"));// if element not available returns false

//find() method returns the value of the first array element that passes a test function.
let num=[10,20,30,50];
console.log(num.find(num=>num>20)); //30-value

//findIndex() method returns the index of the first array element that passes a test function.
console.log(num.findIndex(num=> num>20)); // 2- index


//findLast() method that will start from the end of an array and return the value of the first element 
console.log(num.findLast(num=> num>10));//50

//findLastIndex() method finds the index of the last element 
console.log(num.findLastIndex(num=> num>20)); //3

