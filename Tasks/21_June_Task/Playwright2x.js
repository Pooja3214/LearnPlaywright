class Student{
//Static variables
    static batch="Playwright2x";

     constructor(id, name){
this.id=id;
this.name=name;
    }

//non static method
    print(){
 console.log(`Student Id: ${this.id} Student Name ${this.name}`);

    }

//static method
   static  printBatch(){
console.log(`Batch name : ${Student.batch}`);

    }
   

}

// created 10 objects
const total_student=[ new Student(1,"Priya"),
new Student(2,"Bipin"),
new Student(3,"Vimal"),
new Student(4,"Shivani"),
new Student(5,"Neeki"),
new Student(6,"Reshma"),
new Student(7,"Adarsh"),
new Student(8,"Vikas"),
new Student(9,"Pooja"),
new Student(10,"Munish")]

total_student.forEach(s => s.print());

Student.printBatch();
