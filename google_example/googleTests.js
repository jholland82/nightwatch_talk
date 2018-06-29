module.exports = {
  'Find the Google Textbox' : function (browser) {
    browser
      .url(browser.globals.url)
      .waitForElementVisible('body', 100)
    // .pause(5000)
      .assert.elementPresent('input.gsfi')
      .setValue('input.gsfi', 'Found It!')
    // .pause(4000);
  },

  'Search with Google' : function (browser) {
    browser
      .url(browser.globals.url)
      .waitForElementVisible('body', 100)
      .assert.elementPresent('input.gsfi')
      .setValue('input.gsfi', 'Found It!')
      .click('input[name=btnK]')
    // .pause(10000);
  },

  //  'Now with page objects!': function(browser) {
  //    var google = browser.page.google();
  //    google.navigate()
  //      .waitForElementVisible('body', 100)
  //      .assert.elementPresent('@searchBox')
  //      .setValue('@searchBox', 'Boca JS')
  //      .click('@searchButton')
  //    //browser.pause(10000)
  //  },

  'And end the tests': function(browser) {
    browser.end();
  }
};
