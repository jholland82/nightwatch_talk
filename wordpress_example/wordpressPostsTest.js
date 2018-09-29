 module.exports = {
   menuSection: null,
   pagesMenu: null,
   pageList: null,
   pageEditor: null,
   pageTrash: null,

   before(browser) {
     menuSection = browser.page.wordpressAdmin().section.menu;
     pagesMenu = browser.page.wordpressAdmin().section.pagesMenu;
     pageList = browser.page.wordpressPages().section.pageList;
     pageEditor = browser.page.wordpressPages().section.pageEditor;
     pageTrash = browser.page.wordpressPages().section.pageTrash;
   },

   // Page tests
   'Creates a page' : function (browser) {
     browser.loginToAdmin();

     menuSection.click('@menuPages');
     pageList.waitForElement('@pagesTitle')
             .assert.containsText('@pagesTitle', 'Pages')
             .click('@addNewPage');
     pageEditor.waitForElement('@pageEditorBody')
               .assert.urlContains('post-new.php?post_type=page')
               .setValue('@pageEditorTitle', 'testing')
               .setValue('@pageEditorContent', 'testing')
               .click('@publishButton');
     pageList.waitForElement('@message')
             .assert.containsText('@message', 'Page published.')
             .assert.urlContains('post.php');
   },

   'Edits a page' : function (browser) {
     menuSection.moveToElement('@menuPages', 5, 5, function() {
       browser.pause(100);
       pagesMenu.click('@menuAllPages');
     });
     pageList.waitForElement('@addNewPage')
             .click('@testingRow1');
     pageEditor.waitForElement('@pageEditorBody')
               .clearValue('@pageEditorTitle')
               .setValue('@pageEditorTitle', 'testing2')
               .click('@publishButton');

     pageList.waitForElement('#message')
             .assert.containsText('@message', 'Page updated.')
             .assert.urlContains('post.php');
   },

   'Deletes a page' : function (browser) {
     menuSection.moveToElement('@menuPages', 5, 5, function() {
       browser.pause(100)
       pagesMenu.click('@menuAllPages')
     });
     pageList.waitForElement('@pagesTitle')
             .assert.containsText('@pagesTitle', 'Pages')
             .click('@testingRow2');
     pageEditor.waitForElement('@pageEditorBody')
               .click('@moveToTrash');
     pageList.waitForElement('@message')
             .assert.containsText('@message', '1 page moved to the Trash.')
             .assert.urlContains('edit.php');
   },

   'Empties the page trash' : function(browser) {
     pageList.assert.containsText('@trash', 'Trash')
             .click('@trash');

     pageTrash.waitForElement('@pageTrashBody')
              .click('@deleteAll');

     pageList.waitForElement('@message')
             .assert.containsText('@message', 'permanently deleted');
   },

   'And Ends': function(browser) {
     browser.end()
   }
 }
