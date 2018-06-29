const waitTime = 5000;

module.exports = {
  sections: {
    postList: {
      selector: '#wpbody-content',
      elements: {
        postsTitle: {
          selector: 'h1.wp-heading-inline'
        },
        addNewPost: {
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
          selector: '.row-actions .trash'
        },
        tagColumn: {
          selector: 'td.column-tags'
        },
        tagRow: {
          selector: 'tbody td.column-tags'
        },
        trashHeader: {
          selector: '.trash'
        }
      }
    },
    postEditor: {
      selector: '#wpbody-content',
      elements: {
        postEditorBody: {
          selector: 'form#post'
        },
        postEditorTitle: {
          selector: 'input[name=post_title]'
        },
        postEditorContent: {
          selector: 'textarea'
        },
        publishButton: {
          selector: 'input[id=publish]'
        },
        moveToTrash: {
          selector: '.deletion'
        },
        message: {
          selector: '#message'
        },
        newPostTag: {
          selector: '#new-tag-post_tag'
        },
        addTag: {
          selector: '.tagadd'
        },
        tag: {
          selector: '.tagsdiv li'
        }
      }
    },
    postTrash: {
      selector: '#wpbody-content',
      elements: {
        postTrashBody: {
          selector: '#posts-filter'
        },
        deleteAll: {
          selector: 'input[name=delete_all]'
        }
      }
    }
  }
}
