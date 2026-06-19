const user={
    firstName: "Pooja",
    lastName: "Sharma",
   get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

//Objects --JS-{}
//class and object

console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);


// class User{
//     firstname
//     lastName,
//     fullName(){

//     }
// }
