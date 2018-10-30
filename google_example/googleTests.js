module.exports = {
  //  'Search with Google' : function (browser) {
  //    browser
  //      .url(browser.globals.url)
  //      .pause(1000)
  //      .waitForElementVisible('body', 100)
  //      .assert.elementPresent('input.gsfi')
  //      .setValue('input.gsfi', 'Milwaukee')
  //      .pause(1000)
  //      .waitForElementVisible('input[name=btnK]', 100)
  //      .click('input[name=btnK]')
  //      .pause(50000);
  //  },

  'Now with page objects!': function(browser) {
    var google = browser.page.google();
    google.navigate()
      .waitForElementVisible('body', 100)
      .assert.elementPresent('@searchBox')
      .setValue('@searchBox', 'Milwaukee')
      .waitForElementVisible('@searchButton', 100)
      .click('@searchButton')
  },

  after(browser) {
    browser.end();
  }
};
