module.exports = {
  'Now with page objects!': function(browser) {
    var google = browser.page.google();
    google.navigate()
      .waitForElementVisible('body', 100)
    browser.pause(1000)
    google.assert.elementPresent('@searchBox')
      .setValue('@searchBox', 'Milwaukee')
      .waitForElementVisible('@searchButton', 100)
      .click('@searchButton')
    browser.pause(5000)
  },

  after(browser) {
    browser.end();
  }
};
