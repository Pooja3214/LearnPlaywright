let c={status: "pass"};
let d={status: "pass"}; // both not pointing to same

console.log(c);
console.log(d);

if(c===d){
    console.log("true");
    
}else{
    console.log("false");
    
}
