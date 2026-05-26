let scores = [45, 82, 91, 60, 73];

//map-// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 

let grades= scores.map(s=>s>60? "Pass":"Fail");
console.log(grades);

//filter() method creates a new array with array elements that pass a test.

let f=scores.filter(s=> s > 50);
console.log(f);

//reduce() method runs a function on each array element to produce a single value.
//The reduce() method works from left-to-right in the array

let red= scores.reduce((a,b)=> a+b,0);
console.log(red);

// flat — flattens nested arrays
let nested=[[1,2],[3,4],[5,6]];
console.log(nested.flat());