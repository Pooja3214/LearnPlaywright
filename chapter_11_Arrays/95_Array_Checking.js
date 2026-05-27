//check that sometion IS array

let result=Array.isArray("3","4");
console.log(result); //false

let res=Array.isArray([1,4,5]);
console.log(res);

//every & some
let e= [80,90,60].every(s=>s > 70);
console.log(e); //false

//// some — AT LEAST ONE must pass
let sc=[45,23,98].some(j=> j>40);
console.log(sc);

