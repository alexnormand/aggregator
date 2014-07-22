var $ = require('jquery');
var Backbone = require('backbone');
var RootView = require('../views/root/root');
var AboutView = require('../views/about');
var ContactView = require('../views/contact');
var SiteView = require('../views/site');
var Site = require('../collections/site');

Backbone.$ = $;

module.exports = Backbone.Router.extend({

  routes: {
    ""        : "root",
    "about"   : "about",
    "contact" : "contact",
    ":sitename"   : "site"
  },

  root : function () {
    $.getJSON('get/sites.json', function(sites) {
      var view = new RootView({sites: sites});
      view.render();
    });
  },

  about : function() {
    var view = new AboutView;
    view.render();
  },

  contact : function() {
    var view = new ContactView;
    view.render();
  },

  site: function(sitename) {
    var site  = new Site(null, {sitename: sitename}),
        view  = new SiteView({collection: site,
              id: sitename
             });

    $.getJSON(site.url, function(json) {
      site.reset(json);
    });
  }
});
