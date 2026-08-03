interface APIresponse{
    readonly statusCode: number;
    body: string;
    header?: Object;
    responseTime?: number
}

let response: APIresponse={
    statusCode:200,
    body:'{"user":"admin"}',
};

console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.header);

//response.statusCode=400; //Cannot assign to 'statusCode' because it is a read-only property.

response.body="uhhhjs";
