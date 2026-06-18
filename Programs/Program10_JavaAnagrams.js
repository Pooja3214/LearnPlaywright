//Java Anagrams

//Eat-Tea           From-Form
//Nail-Lain  

let str1= 'Nail';
let str2='Lain';

if(str1.length !== str2.length){
    console.log("Length is not same, it is not anagram");
    
}

let s1= str1.toLowerCase().split("").sort().join("");
let s2=str2.toLowerCase().split("").sort().join("");

console.log("Sorted s1:" + s1);
console.log("Sorted s2: "+ s2);

if( s1===s2){
    console.log(`${str1} and ${str2} are anagrams`);
    
}else{
    console.log("Not anagrams");
    
}
