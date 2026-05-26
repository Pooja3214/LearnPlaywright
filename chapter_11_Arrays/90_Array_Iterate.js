let tests = ["login", "checkout", "search"];

for(let i=0;i<tests.length;i++){
console.log(tests[i]);
}

//forEach() method calls a function (a callback function) once for each array element.
tests.forEach((i,index)=>{
    console.log(i,index);
})

console.log("-----");

let students = ["methis", "senthil", "ajay", "rahul"];
for(let student in students){
    console.log(students, "->", students[student]);
}

// entries() method returns an Array Iterator object with key/value pairs:

for(let[i,student] of students.entries()){
console.log(i,student);
}