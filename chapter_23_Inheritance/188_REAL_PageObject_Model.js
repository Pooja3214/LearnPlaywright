class BasePage{
    verify(){
        console.log("Verify the Base page.");
        
    }
}

class LoginPage extends BasePage{
    verify(){
        console.log("verify: user name field exists");
        console.log("verify: password field exists");
        console.log("verify: login button is visible");
    }
}

class DashboardPage extends BasePage{
    verify(){
        console.log("welcome message is available");
        console.log("side menu bar is present");
        
    }
}

class CartPage extends BasePage{
    verify(){
        console.log("cart items is displayed");
        console.log("total price is correct");
        
    }
}

let pages=[new LoginPage(), new DashboardPage(), new CartPage()];

pages.forEach(function(page){
    page.verify();
    console.log("-----");
    
});