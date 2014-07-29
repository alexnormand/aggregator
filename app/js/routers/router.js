var $ = require('jquery');
var Backbone = require('backbone');
var RootView = require('../views/root/root');
var SiteView = require('../views/site');
var Site = require('../collections/site');

Backbone.$ = $;

module.exports = Backbone.Router.extend({

  routes: {
    ''        : 'root',
    'about': function(){},
    'contact': function() {},
    ':sitename'   : 'site',
  },

  root : function () {
    $.getJSON('get/sites.json', function(sites) {
      var view = new RootView({sites: sites});
      view.render();
    });
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
