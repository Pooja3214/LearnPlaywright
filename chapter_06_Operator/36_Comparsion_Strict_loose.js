//number==string

console.log(5=="5"); // true  == (loose equality) compares values after type coercion ie. type conversion
console.log(5==="5"); //false === (strict equality) compares values without type coercion, so it checks both value and type


console.log(0==""); // true  == (loose equality) converts "" to 0 before comparison
console.log(0===""); // false === (strict equality) different types (number vs string)

console.log(true==1); // true  == (loose equality) converts true to 1 before comparison
console.log(false==0); // true  == (loose equality) converts false to 0 before comparison
console.log(true=="1"); // true  == (loose equality) converts true to "1" before comparison
console.log(true==2); // false == (loose equality) converts true to 1 before comparison, so 1 == 2 is false