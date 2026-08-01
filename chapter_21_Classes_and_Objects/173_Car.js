class Car{
    //CAB
    //Constructor
constructor(name_given_during_obj_creation){
    this.name=name_given_during_obj_creation;
}

    //Atrribute

    //Behaviour
    drive(){
        console.log("I will be driving," + this.name);
        
    }
}

const tesla= new Car("Model S");
tesla.drive();

const i10=new Car("Grand i10");
i10.drive();