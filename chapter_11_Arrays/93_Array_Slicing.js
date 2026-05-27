// Slicing & Combining

//. // slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1,3));

console.log(arr.slice(2,3));

//start from -1 to 2 till end
console.log(arr.slice(-2));
console.log(arr.slice(0));

let arr1 = [10, 20, 30, 40, 50];
let s = arr1.slice(1, 4);  //20,30,40
console.log(arr1); 
console.log(s);

let arr2 = [10, 20, 30, 40, 50];
let removed=arr2.slice(1,2);
console.log(removed);
console.log(arr2);