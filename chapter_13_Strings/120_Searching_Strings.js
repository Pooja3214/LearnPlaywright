let url="https://staging.vwo.com/api/login?retry=true";

//includes
console.log(url.includes("staging")); //true
console.log(url.includes("production")); // false


//startsWith endsWith

console.log(url.startsWith("https"));//true
console.log(url.endsWith("true")); //true

//indexOf  lastIndexOf
console.log(url.indexOf("a")); // 11
console.log(url.lastIndexOf("a")); //

console.log(url.indexOf("x")); //-1

//search  
console.log(url.search(/login/)); //regx

//  /regx/= These are nothing but A-patterns that you can find within
//  the strings automatically. 





