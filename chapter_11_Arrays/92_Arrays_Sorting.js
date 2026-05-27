let fruits=["apple","cherry","banana"];
fruits.sort();
console.log(fruits);

let number=[1,5,3,2,0];
console.log(number.sort());

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);
//Ascending order, lexicographic sorting

nums.sort((a,b)=> a-b);
console.log(nums);


nums.sort((a,b)=> b-a);
console.log(nums);

