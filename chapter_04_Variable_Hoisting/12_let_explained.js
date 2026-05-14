//let- Block scoped

let a=10;

let retryCount=0;
retryCount=retryCount+1;
retryCount=retryCount+1;
console.log("Retry attempt:" +retryCount); // 2

 let retryCount=5; // SyntaxError: Identifier 'retryCount' has already been declared

let testStatus="Pending";

if(testStatus==="Pending"){
    let executionTime=1200;
    console.log("Inside block: " +executionTime); // 1200
}

console.log("Outside block: " +executionTime); // ReferenceError: executionTime is not defined

//{}- Block
//function name(){}
//if(condition){}
//for(initialization; condition; increment){}

//let=loyal
//var=variable, traitor
