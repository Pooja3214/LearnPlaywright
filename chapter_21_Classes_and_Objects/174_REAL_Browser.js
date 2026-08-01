class TestCase{
    constructor(name,status,priority){
        this.name=name;
        this.status=status;
        this.priority=priority;
    }

    display(){  //method
        console.log(this.name +"->" + this.status +"->" + this.priority);
        
    }
}

// Function
function f1() {

}

const loginTC= new TestCase("Login","Pass","P0");
const signUpTC=new TestCase("signUp","Fail","P1");

loginTC.display();
signUpTC.display();

//Function vs /**
 
//method- when function is inside the class
//function- outside the class