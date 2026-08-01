class Browser {
    // Param constructor (arguments)
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }

    startBrowser() {
        console.log("starting the browser")
    }
    closeBrowser() {
        console.log("starting the browser")
    }
}

let chrome = new Browser("Chrome"); // Chrome Launched
let firefox = new Browser("Firefox"); //Firefox Launched

console.log(chrome.isOpen); // true