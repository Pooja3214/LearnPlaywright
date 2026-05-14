var a=10; // Global scope

//var is function scoped

console.log(a);

function printHello(){
    console.log("Javascript Learning");

    var a=20;
    console.log(a); // 20 - local variable shadows global 'a'

    if(true){
        var a=30; // Still the same 'a' due to function scope
        console.log(a); // 30
    }   

}

printHello();

var a=50;
console.log(a); // 50