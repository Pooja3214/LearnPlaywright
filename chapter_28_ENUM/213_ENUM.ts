enum Browser{
    Chrome="chrome",
    Edge="edge",
    Firefox="firefox",
    Safari="safari"
}

function launchBrowser(browser: Browser): void {
    switch (browser) {
        case Browser.Chrome:
            console.log("Launching Chromium (Chrome v120)");
            break;
        case Browser.Firefox:
            console.log("Launching Gecko (Firefox v115)");
            break;
        case Browser.Safari:
            console.log("Launching WebKit (Safari v17)");
            break;
        case Browser.Edge:
            console.log("Launching Chromium (Edge v120)");
            break;
    }
}

console.log(Browser.Chrome);
