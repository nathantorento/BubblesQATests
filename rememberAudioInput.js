// Load required functions from node_modules
const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

// Creates a function to test if /new retains input
async function rememberAudioInput(){
    
    // New browser instances always have default permissions so the argument below
    // ensures that Chrome mic permissions are allowed
    let options = new chrome.Options();
    options.addArguments("use-fake-ui-for-media-stream");

    // Open a Chrome browser with the mic permissions above
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
        
        try {
            // Open new topic modal which currently defaults to screen recording
            await driver.get("http://app.usebubbles.com/new");
            await driver.sleep(1000); // pauses in between are for demo purposes and to allow proper loading
            // Allow permissions if they haven't been enabled yet            
            await driver.findElement(By.css(".MicrophoneSlashIcon__MicrophoneSlash-sc-1pl9sog-0")).click();
            
            // Select the second audio option
            await driver.sleep(1000);
            await driver.findElement(By.css(".Dropdown__StyledCaretDownIcon-sc-1joz9h2-4")).click();
            await driver.sleep(1000);
            await driver.findElement(By.css(".Dropdown__Option-sc-1joz9h2-6:nth-child(2)")).click();
            await driver.sleep(1000);
            let inputMic = await driver.findElement(By.css(".Dropdown__Text-sc-1joz9h2-0")).getText();

            // Assert that selected audio option was the second option
            await driver.sleep(1000);
            await driver.navigate().refresh(); // *currently refreshing requires microphone click again
            await driver.sleep(1000);
            await driver.findElement(By.css(".MicrophoneSlashIcon__MicrophoneSlash-sc-1pl9sog-0")).click();
            await driver.sleep(1000);
            
            assert.strictEqual(await driver.findElement(By.css(".Dropdown__Text-sc-1joz9h2-0")).getText(), inputMic);
            console.log("Test successful"); // Announce that test was successful

        } catch (error) {
        console.log(error);
        console.log("Test not successful");  
        
    } 
    // Close browser to signify end of test
    await driver.sleep(1000);
    driver.quit() 
}


// Run function/test
rememberAudioInput()