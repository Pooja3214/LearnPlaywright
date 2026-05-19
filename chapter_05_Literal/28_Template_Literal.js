//Template literally - a template literal is a special way to write strings using backticks instead of quotes.

let firstName="Pooja";
let fullName=`Hi ${firstName} Sharma`;

console.log(fullName);

let env="staging";
env="prod";
const userId= 12345;
const url=`https://api-${env}.tekion.com/${userId}`;
console.log(url);

//Playwright
const rowIndex=3;
const columnName="email";
//await page-locator(`[data-row="${rowIndex}"] [data-column="${columnName}"]`).click();


//Logs
const testName="Login Test";
const status="Failed";
const duration=2.13;
console.log(`[${status}] ${testName} is completed in ${duration}s`);

const testCase="checkout_flow";
const timestamp=Date.now();
// await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });

const userName="pooja";
const role="admin";
const payload=`{
"user"="${userName}",
"role"="${role}",
"timestamp"="${new Date().toISOString()}"
}`;
console.log(payload);