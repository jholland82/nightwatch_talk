module.exports = {
  'Find the Google Textbox' : function (browser) {
    browser
      .url(browser.globals.url)
      .waitForElementVisible('body', 100)
      .pause(5000)
      .assert.elementPresent('input.gsfi')
      .setValue('input.gsfi', 'Boca JS')
      .pause(5000);
  },

  'Search with Google' : function (browser) {
    browser
      .url(browser.globals.url)
      .waitForElementVisible('body', 100)
      .assert.elementPresent('input.gsfi')
      .setValue('input.gsfi', 'Boca JS')
      .waitForElementVisible('input.lsb', 100)
      .click('input.lsb')
      .pause(5000);
  },

  'Now with page objects!': function(browser) {
    var google = browser.page.google();
    google.navigate()
      .waitForElementVisible('body', 100)
      .assert.elementPresent('@searchBox')
      .setValue('@searchBox', 'Boca JS')
      .waitForElementVisible('@searchButton', 100)
      .click('@searchButton')
    browser.pause(5000)
  },

  'And end the tests': function(browser) {
    browser.end();
  }
};
