define([
    'jquery',
    'backbone',
    'text!templates/root/siteBox.html'
], function($, Backbone, siteBoxTemplate) {

    var SiteBox = Backbone.View.extend({

  template: siteBoxTemplate,

  initialize: function(options) {
      this.name = options.name;
      this.collection.bind('reset', this.render, this);
  },

  render: function(event) {
      var html = _.template(this.template,
          {quotes: this.collection.pluck('content').slice(0,3),
           name: this.name,
           id: this.id
          });

      this.$el.removeClass('loader')
        .hide()
        .html(html)
        .fadeIn('slow')
        .css('overflow', 'scroll');

      /*
       * Remove quotes until the dynamically added div.site-box height
       * is lower than 440px to ensure height consistency between
       * all .site-box divs
       */
      while (this.el.scrollHeight > (this.$el.height() + 2 * parseInt(this.$el.css('padding-top'), 10))) {
          this.$el.find('p, hr').not('.view-more').last().remove();
      }

      this.$el.css('overflow', 'hidden');

      return this;
  }

    });

    return SiteBox;
});
