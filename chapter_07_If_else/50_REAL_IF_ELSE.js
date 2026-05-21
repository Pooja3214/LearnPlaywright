// app.vwo.com -> viewer, editor or admin -> 

let isLoggedIn=true;
let userRole="XYZ";

if(isLoggedIn)
{
    if (userRole==="Admin"){
        console.log("Welcome Admin- can do all the things");
    }else if(userRole=="Editor"){
        console.log("Welcome Editor-edit access granted");
    }else if(userRole==="Viewer"){
        console.log("Welcome Viewer- read only access granted");
    }else{
        console.log("No idea, may you are guest user");
    }
}
else{
    console.log("You are not logged in.Please login to continue");
}