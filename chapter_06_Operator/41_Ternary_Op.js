//condition ? true : false

let pj_age=18;
let pj_will_go_goa=pj_age>=18 ?"PJ will go GOA" : "PJ will not go GOA";
console.log(pj_will_go_goa);

let actualStatusCode=200;
let expectedStatusCode=200;
let testResult=actualStatusCode==expectedStatusCode ? "Pass" : "Fail";
console.log(testResult);

let environment="staging";
let baseUrl=environment=="prod" ?
 "https://api.production.com" : "https://api.staging.com";
 console.log(baseUrl);

 let isCI=true;
let browserMode= isCI ? "headless" : "headed";
console.log("Launching browser is " + browserMode + " mode.");

let responseTime=350;
let sla=1000;
let slaStatus=responseTime<=sla ? "Within SLA" : "SLA Breached";
console.log(`Response time: ${responseTime}ms- ${slaStatus}`);

//Nested ternary operator
// Multiple Condition
let age = 26;
let is_pooja_goa = age > 26 ? "Yes, he will go" : "else he will not go";
console.log(is_pooja_goa);


let age_pooja = 45;
let is_pooja_d = age_pooja > 18 ? (age_pooja > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log(is_pooja_d);


let statusCode=400;
let category=statusCode<300 ? "Success" 
: statusCode <400 ? "Redirection" :
statusCode<500 ? "Client Error" : "Server Error";

console.log(`Status Code: ${statusCode} - ${category}`);
  

let temp=35;

let weather= (temp>=40) ? "very hot" :
(temp>30) ? "hot":
(temp >20) ? "Warm":
(temp>=10) ? "Cool" : "Cold";

console.log (`Temperature: ${temp} - Weathher: ${weather}`);
