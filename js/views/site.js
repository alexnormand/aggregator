var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var BaseView = require('./baseView');
var SiteTemplate = require('../templates/site.html');

Backbone.$ = $;

module.exports = BaseView.extend({
  template: SiteTemplate,

  initialize: function() {
    this.collection.bind('reset', this.render, this);
    this.updateMainView(this.loaderImage, null);
    $(document).scrollTop() !== 0 && $(document).scrollTop(0);
  },

  render: function() {
    $.ajax({
        url: 'get/sites.json',
        dataType: 'json',
        context: this,
        success: function(sites) {

            var html = _.template(this.template,
                                  { name: sites[this.id]['site'],
                                    quotes: this.collection.toJSON()
                                  });

            this.$el.html(html)
                .fadeIn('slow');
            this.updateMainView(this.el, null);
        }
    });

    return this;
  }

});
