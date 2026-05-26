let status=["Pass","Fail","Skip"];
console.log(status[0]);
console.log(status[1]);
console.log(status[2]);


console.log(status.at[-1]);
console.log(status.at[-2]);
console.log(status.at[-3]);  // Array at method returns the indexed element of an array

//MOdify
status[1]="Blocked";
console.log(status[1]);
