var Backbone = require('backbone');
var Quote = require('../models/quote');

module.exports = Backbone.Collection.extend({
  model : Quote,
  initialize: function(models, options) {
    this.url = 'server/' + options.sitename;
  }
});
