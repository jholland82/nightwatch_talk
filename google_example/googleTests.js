module.exports = {
  'Search with Google' : function (browser) {
    browser
      .url(browser.globals.url)
      .waitForElementVisible('body', 100)
      .assert.elementPresent('input.gsfi')
      .setValue('input.gsfi', 'Milwaukee')
      .waitForElementVisible('input[name=btnK]', 100)
      .click('input[name=btnK]')
      .pause(50000);
  },

  //  'Now with page objects!': function(browser) {
  //    var google = browser.page.google();
  //    google.navigate()
  //      .waitForElementVisible('body', 100)
  //      .assert.elementPresent('@searchBox')
  //      .setValue('@searchBox', 'Milwaukee')
  //      .waitForElementVisible('@searchButton', 100)
  //      .click('@searchButton')
  //    browser.pause(5000)
  //  },

  after(browser) {
    browser.end();
  }
};
