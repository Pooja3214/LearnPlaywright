class Student{
    constructor(name,age,phoneNo){
        this.name_student=name;
        this.age=this.age;
        this.phoneNo=this.phoneNo;
    }
    
    static name="Playwright2x";
    static mentor_name= "Pramod";

static display(){
    console.log("I am a common fn");
    
}
}

const s1=new Student("Pooja",30,7887878);
const s2=new Student("Munish", 33, 8398983);

console.log(s1.name_student);
console.log(s2.name_student);

console.log(Student.name);
console.log(Student.mentor_name);


