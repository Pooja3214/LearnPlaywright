// ✅ String Reverse | Palindrome Program
// Given a string , Reverse it and print true if they are same.
// Madam is palindrome, pramod is not

let str="Madam";
let org=str.toLowerCase();

let rev="";

for(let i=org.length;i>=0;i--){
     rev+=org.charAt(i);
}

if(org===rev){
    console.log("String is palindrome");
}else{
    console.log("String is not palindrome");
    
}
