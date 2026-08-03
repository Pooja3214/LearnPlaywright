class BaseTest{
    setup(){
        console.log("Base: open browser.");
        
    }
}

class APITest extends BaseTest{
    setup(){
        console.log("APITest: open browser");
        
    }
}

let p= new APITest(); //whoever object is created it will get call
p.setup();