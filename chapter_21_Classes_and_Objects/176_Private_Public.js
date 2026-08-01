// Private Fields (#) — Hidden Data
// PUBIC Fields 

class Credentials{
    #apiKey;
    user;
     
    constructor(user,key){
        this.user=user;
        this.#apiKey=key;
    }

    //custom mader function
    authHeader(){
        return "Bearer" + this.#apiKey;
    }
}

let cred= new Credentials("admin","secret_123");
console.log(cred.user);


console.log(cred.apiKey); // undefined
//console.log(cred.#apiKey);//error


let token=cred.authHeader();
console.log(token);
