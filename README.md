# nightwatch_talk
NightwatchJS Talk

## Setup NightwatchJS - npm
Setting up nightwatch is quite simple.  Run the following commands:

`npm init` -- This will set up your package.json file
`npm install --save nightwatch`
`npm install --save selenium-server`
`npm install --save chromedriver`

inside package.json add this code to `scripts`
`"nightwatch": "./node_modules/.bin/nightwatch"`

this command allows you to run `npm run nightwatch` to run your tests_output

## Configuring NightwatchJS

[NightwatchJS Documentation](http://nightwatchjs.org/gettingstarted#settings-file) Provides a wealth of information about configuring NightwatchJS.  For now we will use this configuration file to start:
```
const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  "custom_commands_path" : "commands",
  "page_objects_path": "page_objects",
  "src_folders": [  // Where you are storing your Nightwatch e2e tests
    google_example",
    simple_wordpress_example",
    "wordpress_example",
  ],
  "selenium": {
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": seleniumServer.path,
    "port": 4444, // standard selenium port
    "cli_args": {
      "webdriver.chrome.driver" : chromedriver.path
    }
  },
  "test_settings": {
    "default": {
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "globals": {
        "url": process.env.GOOGLE_URL,
        "waitTime": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": { // use Chrome as the default browser for tests
        "browserName": "chrome",
        "javascriptEnabled": true, // turn off to test progressive enhancement
        //        "chromeOptions": {
        //          "args" : [
        //            "headless",
        //            "no-sandbox",
        //            "disable-gpu",
        //            "window-size=1920,1280"
        //          ]
        //        }
      }
    },
  }
}

function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  return count < 10 ? '0' + count : count.toString();
}
```

When you use NightwatchJS take a look at the docs and take what you need for your test requirements.

## ENV Values
I am using ENV variables for the following values.  You will want to set them locally or change them to string values in your code
GOOGLE_URL
WP_ADMIN
WP_USERNAME
WP_PASSWORD
