const Base_URL = "https://www.google.com/";
//Base_URL= "https://www.facebook.com/";   // TypeError: Assignment to constant variable.

let name="Pooja";
name="DOne"; // Allowed to reassign;

{
    let name="Not done"; // This 'name' is different from the outer 'name' due to block scope
    console.log("Inside block: " +name); // Not done        
}

function say(){
    let name="Not done";
}

say();
