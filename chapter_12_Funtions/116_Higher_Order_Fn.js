// Higher-Order Functions
// A function that takes a function as argument or returns a function.

function runWithLoggin(testFn,testName){
//console.log(`STarting: ${testName}`);

let result=testFn();
return result;
}

function loginTest(){
    return "pass";
}

function loginTestFailed(){
    return "fail";
}

runWithLoggin(loginTest, "Login Test");
runWithLoggin(loginTestFailed, "Dashboard Failed Test");