//Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of 
// the sides, determine if the triangle is equilateral (all sides are equal),
//  isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let a=4;
let b=4;
let c=4;

if(a===b && b===c)
{
    console.log("Equilateral triangle: all sides are equal.");
}else if((a===b && b!==c) || ( a!== b && b===c)){
    console.log("Isosceles triangle: exactly two sides are equal.");
}else if(a!==b && b!==c){
    console.log("Scalene triangle: No sides are equal");
}else{
    console.log("Invalid!");
}