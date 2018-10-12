const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  "custom_commands_path" : "commands",
  "page_objects_path": "page_objects",
  "src_folders": [  // Where you are storing your Nightwatch e2e tests
    "google_example",
    "wordpress_example"
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
        "url": "https://www.google.com",
        "waitTime": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": { // use Chrome as the default browser for tests
        "browserName": "chrome",
        "javascriptEnabled": true, // turn off to test progressive enhancement
        //                "chromeOptions": {
        //                  "args" : [
        //                    "headless",
        //                    "no-sandbox",
        //                    "disable-gpu",
        //                    "window-size=1920,1280"
        //                  ]
        //                }
      }
    },
  },
  //  "test_workers" : {
  //    "enabled": true,
  //    "workers": "auto"
  //  }
}

function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  return count < 10 ? '0' + count : count.toString();
}
