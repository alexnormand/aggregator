var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var BaseView = require('../baseView');
var SiteBoxView = require('./siteBox');
var Site = require('../../collections/site');
var RootTemplate = require('../../templates/root/root.html');


Backbone.$ = $;

module.exports = BaseView.extend({
  template: RootTemplate,

  initialize: function(options) {
    this.sites = options.sites;
  },

  render: function(event) {
    this.$el.html(this.template);
    this.updateMainView(this.el, 0);
    _.each(this.sites, function(s, key) {
      var site  = new Site(null, {sitename: key}),
          view  = new SiteBoxView({collection: site,
                                   name: s.site,
                                   id: key,
                                   el: document.getElementById(key)
                                  });

      $.getJSON(site.url, function(json) {
        site.reset(json);
      });
    });

    return this;
  }
});
