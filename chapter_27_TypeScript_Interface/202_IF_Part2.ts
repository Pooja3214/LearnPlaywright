interface APIresponse{
    body: string;
    header?: Object;
    responseTime?: number
}

let response1: APIresponse ={
body: "Hi",
};

let response2: APIresponse= {
    body: "Hello",
    header: " ",
    responseTime: 400,
};