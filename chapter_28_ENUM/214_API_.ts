enum HTTPMethod {
    Get = "GET",
    post = "POST",
    put = "PUT",
    delete = "DELETE"
}

function sendRequest(method: HTTPMethod, endpoint: string): void {
    console.log(method + " " + endpoint + " → 200 OK");
}

sendRequest(HTTPMethod.Get, "/api/users");
sendRequest(HTTPMethod.post, "/api/users");
sendRequest(HTTPMethod.delete, "/api/users/1");