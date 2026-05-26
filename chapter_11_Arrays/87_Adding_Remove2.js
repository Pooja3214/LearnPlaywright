let arr=["Apple","Banana","Mango"];

//splice()- splice() method can be used to add new items to an array:

arr.splice(3,0,"Kiwi","Cherry");// 3- position, 0- no. of items to be removed, Kiwi,etc- adding elements
console.log(arr);


//replace

arr.splice(2,1,"Papaya");
console.log(arr);

let a=[1,2,3];
a.splice(1,2,10,20);
console.log(a);