class PlaywrightConfig {
    readonly baseURL: string;
    readonly timeout: number;
    readonly retries: Number

    constructor(url: string, timeout:number, retries:number){
        this.baseURL=url;
        this.timeout=timeout;
        this.retries=retries;
    }

    showConfig():void{
        console.log("URL: "+ this.baseURL);
        console.log("Timeout "+ this.timeout+"ms");
        console.log("Retries "+this.retries);
    }
}

let p=new PlaywrightConfig("https://www.vwo.com", 2000, 3);
p.showConfig();

//p.baseURL("https://www.staging.com");