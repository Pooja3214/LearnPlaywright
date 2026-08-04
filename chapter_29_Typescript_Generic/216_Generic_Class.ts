class TestDataStorage<T>{

    private items: T[]=[];
    add(item:T):void{
        this.items.push(item);
        }

    getFirst():T{
        return this.items[0]!
    }

    getAll():T[]{
        return this.items;
    }

    count():number{
        return this.items.length;
    }
}

let statusCode= new TestDataStorage<number>();
let testName=new TestDataStorage<string>();

statusCode.add(200);
statusCode.add(404);
statusCode.add(500);

testName.add("Login Test");
testName.add("Checkout Test");

console.log("Codes:", statusCode.getAll());
console.log("First code:", statusCode.getFirst());
console.log("Tests:", testName.getAll());
console.log("Test count:", testName.count());