const waitTime = 5000;

module.exports = {
  sections: {
    pageList: {
      selector: '#wpbody-content',
      elements: {
        pagesTitle: {
          selector: 'h1.wp-heading-inline'
        },
        addNewPage: {
          selector: '.page-title-action'
        },
        message: {
          selector: '#message'
        },
        testingRow1: {
          selector: "//a[text()='testing']",
          locateStrategy: 'xpath'
        },
        testingRow2: {
          selector: "//a[text()='testing2']",
          locateStrategy: 'xpath'
        },
        trash: {
          selector: '.subsubsub .trash'
        }
      }
    },
    pageEditor: {
      selector: '#wpbody-content',
      elements: {
        pageEditorBody: {
          selector: 'form#post'
        },
        pageEditorTitle: {
          selector: 'input[name=post_title]'
        },
        pageEditorContent: {
          selector: 'textarea'
        },
        publishButton: {
          selector: 'input[id=publish]'
        },
        moveToTrash: {
          selector: '.deletion'
        }
      }
    },
    pageTrash: {
      selector: '#wpbody-content',
      elements: {
        pageTrashBody: {
          selector: '#posts-filter'
        },
        deleteAll: {
          selector: 'input[name=delete_all]'
        }
      }
    }
  }
}
