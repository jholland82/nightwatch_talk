module.exports = {
  dashboard: null,
  menuSection: null,

  before(browser) {
    dashboard = browser.page.wordpressAdmin();
    menuSection = dashboard.section.menu;
  },

  'Menu Items are visible' : function (browser) {
    browser.loginToAdmin();
    menuSection.assert.visible('@menuPosts')
               .assert.containsText('@menuPosts', 'Posts')
               .assert.visible('@menuMedia')
               .assert.containsText('@menuMedia', 'Media')
               .assert.visible('@menuPages')
               .assert.containsText('@menuPages', 'Pages')
               .assert.visible('@menuComments')
               .assert.containsText('@menuComments', 'Comments')
               .assert.visible('@menuAppearance')
               .assert.containsText('@menuAppearance', 'Appearance')
               .assert.visible('@menuPlugins')
               .assert.containsText('@menuPlugins', 'Plugins')
               .assert.visible('@menuUsers')
               .assert.containsText('@menuUsers', 'Users')
               .assert.visible('@menuTools')
               .assert.containsText('@menuTools', 'Tools')
               .assert.visible('@menuSettings')
               .assert.containsText('@menuSettings', 'Settings')

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

               .moveToElement('@menuMedia', 5, 5, function() {
                 var mediaMenu = dashboard.section.mediaMenu;
                 browser.pause(100)
                 mediaMenu.assert.visible('@menuLibrary')
                 mediaMenu.assert.containsText('@menuLibrary', 'Library')
                 mediaMenu.assert.visible('@menuAddNew')
                 mediaMenu.assert.containsText('@menuAddNew', 'Add New');
               })
               .moveToElement('@menuPages', 5, 5, function() {
                 var pagesMenu = dashboard.section.pagesMenu;
                 browser.pause(100)
                 pagesMenu.assert.visible('@menuAllPages')
                          .assert.containsText('@menuAllPages', 'All Pages')
                          .assert.visible('@menuAddNew')
                          .assert.containsText('@menuAddNew', 'Add New');
               })
               .moveToElement('@menuAppearance', 5, 5, function() {
                 var appearanceMenu = dashboard.section.appearanceMenu;
                 browser.pause(100)
                 appearanceMenu.assert.visible('@menuThemes')
                               .assert.containsText('@menuThemes', 'Themes')
                               .assert.visible('@menuCustomize')
                               .assert.containsText('@menuCustomize', 'Customize')
                               .assert.visible('@menuWidgets')
                               .assert.containsText('@menuWidgets', 'Widgets')
                               .assert.visible('@menuMenus')
                               .assert.containsText('@menuMenus', 'Menus');
               })
               .moveToElement('@menuUsers', 5, 5, function() {
                 var usersMenu = dashboard.section.usersMenu;
                 browser.pause(100)
                 usersMenu.assert.visible('@menuAllUsers')
                          .assert.containsText('@menuAllUsers', 'All Users')
                          .assert.visible('@menuAddNew')
                          .assert.containsText('@menuAddNew', 'Add New')
                          .assert.visible('@menuYourProfile')
                          .assert.containsText('@menuYourProfile', 'Your Profile');
               })
               .moveToElement('@menuTools', 5, 5, function() {
                 var toolsMenu = dashboard.section.toolsMenu;
                 browser.pause(100)
                 toolsMenu.assert.visible('@menuAvailableTools')
                          .assert.containsText('@menuAvailableTools', 'Available Tools')
                          .assert.visible('@menuImport')
                          .assert.containsText('@menuImport', 'Import')
                          .assert.visible('@menuExport')
                          .assert.containsText('@menuExport', 'Export')
               })
               .moveToElement('@menuSettings', 5, 5, function() {
                 var settingsMenu = dashboard.section.settingsMenu;
                 browser.pause(100)
                 settingsMenu.assert.visible('@menuGeneral')
                             .assert.containsText('@menuGeneral', 'General')
                             .assert.visible('@menuWriting')
                             .assert.containsText('@menuWriting', 'Writing')
                             .assert.visible('@menuReading')
                             .assert.containsText('@menuReading', 'Reading')
                             .assert.visible('@menuDiscussion')
                             .assert.containsText('@menuDiscussion', 'Discussion')
                             .assert.visible('@menuMedia')
                             .assert.containsText('@menuMedia', 'Media')
                             .assert.visible('@menuPermalinks')
                             .assert.containsText('@menuPermalinks', 'Permalinks')
                             .assert.visible('@menuPrivacy')
                             .assert.containsText('@menuPrivacy', 'Privacy');
               })
  },

  'And Ends': function(browser) {
    browser.end()
  }
}
