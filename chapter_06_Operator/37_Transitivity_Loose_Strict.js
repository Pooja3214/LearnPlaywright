console.log(0==""); //true
console.log(0=="0"); //true
console.log(""=="0"); //false transitivity broken because both are strings, so type coercin occurs

console.log(0==false); //true
console.log(null==false); //false null is only loosely equal to undefined, not to any other value, including false
console.log(null==undefined);//true null and undefined are loosely equal to each other, but not to any other value.
console.log(undefined==null);//true 