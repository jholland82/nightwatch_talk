exports.command = function(element) {
    this
      .waitForElementVisible(element, this.globals.waitTime)
      return this;
};
