let n=prompt("Enter a number");
let num=Number(n); // convert string to number

if(num%2===0){
    console.log(num + "Even number");
}else
    console.log(num + "is Odd number");


    // this will run in browser only because prompt is not defined in node environment.