class Animal{
    constructor(name){
        this.name=name;
    }

    eat(){
        console.log(this.name + " is eating.");
        
    }

    sleep(){
        console.log(this.name + " is sleeping.");
        
    }
}

class Dog extends Animal{

    constructor(name, breed){
        super(name); // It is used for parent constructor
        this.breed=breed;
    }
    bark(){
        console.log(this.name + " is barking.");
        
    }
}

let p= new Dog("Rex","Labrador");
p.sleep();
p.bark();
p.eat();

console.log(p.breed); // Labrador
console.log(p.name); //Rex

