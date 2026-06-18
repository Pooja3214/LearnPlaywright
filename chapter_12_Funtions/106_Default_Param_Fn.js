function retry(testName, maxRetries=3,delay=1000){
    console.log(`Retrying ${testName}up to ${maxRetries}`);
    
}

retry("Login test");
retry("Registration Test", 5, 2000);