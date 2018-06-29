module.exports = {
  'Menu Items are visible' : function (browser) {
    var dashboard = browser.page.wordpressAdmin();
    var menuSection = dashboard.section.menu;

    browser.loginToAdmin();
    menuSection.assert.visible('@menuPosts')
               .assert.containsText('@menuPosts', 'Posts')

               .moveToElement('@menuPosts', 5, 5, function() {
                 var postsMenu = dashboard.section.postsMenu;
                 browser.pause(100)
                 postsMenu.assert.visible('@menuAllPosts')
                          .assert.containsText('@menuAllPosts', 'All Posts')
                          .assert.visible('@menuAddNew')
                          .assert.containsText('@menuAddNew', 'Add New')
                          .assert.visible('@menuCategories')
                          .assert.containsText('@menuCategories', 'Categories')
                          .assert.visible('@menuTags')
                          .assert.containsText('@menuTags', 'Tags');
               })
  },

  'And Ends': function(browser) {
    browser.end()
  }
}
