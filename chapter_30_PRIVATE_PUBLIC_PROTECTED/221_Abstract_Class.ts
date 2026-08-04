abstract class BaseTest{
    protected testName:string; // abstract calss has incomplete functions and complete functions
    
    constructor(testName:string){ // it has constructor also
        this.testName=testName;
    }

    abstract setUp():void;
    abstract execute(): void;
    abstract teardown(): void;
    abstract loan(): void;

    loan1():void{
        console.log("Hi");

    }
}

class UITest extends BaseTest {
    setUp(): void {
        throw new Error("Method not implemented.");
    }
    setup(): void {
        console.log("  Setup: launch browser");
    }
    execute(): void {
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log("  Teardown: close browser");
    }
    loan(): void {
        console.log("  GIVE LOAN");

    }
}

let p= new UITest("Login");
p.setUp();
