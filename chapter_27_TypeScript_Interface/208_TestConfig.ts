interface TestConfig{
    browser: string;
    headless: boolean;
    baseURL: string;
    timeout?: number;
    retries?: number
}

const ciConfig: TestConfig={
    browser: "chrome",
    headless:true,
    baseURL:"https://staging.app.com"
};

const localConfig: TestConfig={
    browser: "fiorefox",
    headless: true,
    baseURL:"https://localhost:3000",
    timeout: 30000,
    retries:3
};

console.log("CI Config: "+ ciConfig.browser +" timeout: "+ ciConfig.timeout);
console.log("Local Config: "+ localConfig.browser +" timeout: "+ localConfig.timeout);


