//Onjects
// Key and Value

let student1={name: "Pooja", age: 34};
let student2={name: "Pooja"};
let student3={name: "Pooja", age: 56, no: 37327};

//Key will not be in double quote
// when key is also in double quote- it is JSON

let JSON_student4={"name": "Pooja", "age": 87, "no": 678899};

let a={ status: "pass"};

console.log(a.status);
console.log(a["status"]);

let b=a;  // copy by refence
b.status="fail";
console.log(a.status);
console.log(b.status); 

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if(b===a){
    console.log("true");
    
}else{
    console.log("false");
    
}
