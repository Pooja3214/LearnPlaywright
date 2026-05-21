// You are working API Validation
// response Code - 200, 404, 401, 403.....404

let responseCode=200;

switch(responseCode){
    case 200:
        console.log(" 200- API call successful");
        break;

        case 404:
            console.log("Not found");
            break;
            
            default:
                console.log("Status code not matched");
}