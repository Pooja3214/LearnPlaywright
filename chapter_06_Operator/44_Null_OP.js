//?

console.log(null>=0);
console.log(null<=0);
console.log(null==0); 

//Nullish ??

let amul=null;
let milk_required= amul ?? "Verka milk"; // if amul is null or undefined then "Verka milk" will be assigned to milk_required otherwise amul will be assigned to milk_required
console.log(milk_required);

// ?? operator is used in Javascript and ? operator is used in typescript
