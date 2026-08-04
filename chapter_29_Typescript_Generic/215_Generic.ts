function getString(name: string): string {
    return "Amit";
}

getString("pramod");
// getFirstResult(123);

function getFirstResult<T>(result: T[]){
    return result[0]!; //! is non-null assertion operator 
}

let firstCode= getFirstResult<number>([2,3,4]);
let firstTestCase=getFirstResult<string>(["Login","Signup","Cart"]);

console.log(firstCode);
console.log(firstTestCase);

