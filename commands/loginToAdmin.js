exports.command = function() {
    this
      .url(process.env.WP_ADMIN)
      .waitForElementVisible('#login', this.globals.waitTime)
      .setValue('input[name=log]', process.env.WP_USERNAME)
      .setValue('input[name=pwd]', process.env.WP_PASSWORD)
      .click('input[name=wp-submit]')
      .waitForElementVisible('#adminmenumain', this.globals.waitTime)
      return this;
};
