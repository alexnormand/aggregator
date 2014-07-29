var $ = require('jquery');
var Backbone = require('backbone');
var BaseView = require('./baseView');
var SiteTemplate = require('../templates/site.html');

Backbone.$ = $;

module.exports = Backbone.View.extend({
  updateMainView: function(html) {
    $('#main').html(html);
  }
});

