const waitTime = 5000;

module.exports = {
  sections: {
    menu: {
      selector: '#adminmenu',
      commands: [{
        waitForMenu: function() {
          return this.waitForElementVisible('@menuPosts', waitTime);
        }
      }],
      elements: {
        menuPosts: {
          selector: '#menu-posts'
        },
        menuMedia: {
          selector: '#menu-media'
        },
        menuPages: {
          selector: '#menu-pages'
        },
        menuComments: {
          selector: '#menu-comments'
        },
        menuAppearance: {
          selector: '#menu-appearance'
        },
        menuPlugins: {
          selector: '#menu-plugins'
        },
        menuUsers: {
          selector: '#menu-users'
        },
        menuTools: {
          selector: '#menu-tools'
        },
        menuSettings: {
          selector: '#menu-settings'
        }
      }
    },
    postsMenu: {
      selector: '#menu-posts .wp-submenu-wrap',
      elements: {
        menuAllPosts: {
          selector: 'li:nth-child(2)'
        },
        menuAddNew: {
          selector: 'li:nth-child(3)'
        },
        menuCategories: {
          selector: 'li:nth-child(4)'
        },
        menuTags: {
          selector: 'li:nth-child(5)'
        }
      }
    },
    mediaMenu: {
      selector: '#menu-media .wp-submenu-wrap',
      elements: {
        menuLibrary: {
          selector: 'li:nth-child(2)'
        },
        menuAddNew: {
          selector: 'li:nth-child(3)'
        }
      }
    },
    pagesMenu: {
      selector: '#menu-pages .wp-submenu-wrap',
      elements: {
        menuAllPages: {
          selector: 'li:nth-child(2)'
        },
        menuAddNew: {
          selector: 'li:nth-child(3)'
        }
      }
    },
    appearanceMenu: {
      selector: '#menu-appearance .wp-submenu-wrap',
      elements: {
        menuThemes: {
          selector: 'li:nth-child(2)'
        },
        menuCustomize: {
          selector: 'li:nth-child(3)'
        },
        menuWidgets: {
          selector: 'li:nth-child(4)'
        },
        menuMenus: {
          selector: 'li:nth-child(5)'
        }
      }
    },
    usersMenu: {
      selector: '#menu-users .wp-submenu-wrap',
      elements: {
        menuAllUsers: {
          selector: 'li:nth-child(2)'
        },
        menuAddNew: {
          selector: 'li:nth-child(3)'
        },
        menuYourProfile: {
          selector: 'li:nth-child(4)'
        }
      }
    },
    toolsMenu: {
      selector: '#menu-tools .wp-submenu-wrap',
      elements: {
        menuAvailableTools: {
          selector: 'li:nth-child(2)'
        },
        menuImport: {
          selector: 'li:nth-child(3)'
        },
        menuExport: {
          selector: 'li:nth-child(4)'
        },
        menuSessions: {
          selector: 'li:nth-child(5)'
        }
      }
    },
    settingsMenu: {
      selector: '#menu-settings .wp-submenu-wrap',
      elements: {
        menuGeneral: {
          selector: 'li:nth-child(2)'
        },
        menuWriting: {
          selector: 'li:nth-child(3)'
        },
        menuReading: {
          selector: 'li:nth-child(4)'
        },
        menuDiscussion: {
          selector: 'li:nth-child(5)'
        },
        menuMedia: {
          selector: 'li:nth-child(6)'
        },
        menuPermalinks: {
          selector: 'li:nth-child(7)'
        },
        menuPrivacy: {
          selector: 'li:nth-child(8)'
        }
      }
    }
  }
}
