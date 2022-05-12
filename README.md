# Bubbles QA Tests

This is Nathan's current repository of Automated QA Tests for Bubbles using Selenium and Javascript code.

The first QA test tests whether selecting a different mic input persists after refreshing the page. The script stores the value of the selected mic input, refreshes the page, then compares it to whatever mic input is currently selected. 

For now, this is the only test here.

# Setup
------
Clone repo and install relevant dependencies.
```
git clone https://github.com/nathantorento/BubblesQATests
cd BubblesQATests
npm install
```
The [Selenium libraries](https://www.selenium.dev/documentation/webdriver/getting_started/install_library/) should already be included in the package.

Run the test.
```
node rememberAudioInput.js
```

Wait for a Chrome window to pop up and run through the tests live.

Should the test fail at any time, the window will close and the console will return "Test not successful".

Should the test succeed, the window will close and the console will return "Test successful".
