// BasePage -> AuthPape -> AdminPage
class BasePage{
    constructor(name){
        this.name=name;
    }

    open(){
        console.log("[BASE]" + this.name);
        
    }
}

class AuthPage extends BasePage{
    login(user){
        console.log("[LOGIN]" + user);
        
    }
}

class AdminPage extends AuthPage{

    constructor(){
        super("Admin Panel");
    }

    manageUsers(){
        console.log("[Admin] managing users");
        
    }
}

let p= new AdminPage();
p.open();
p.login("superadmin");
p.manageUsers();