var $ = require('jquery');
var Backbone = require('backbone');
var BaseView = require('./baseView');
var aboutTemplate = require('../templates/about.html');

Backbone.$ = $;


module.exports = BaseView.extend({
	template: aboutTemplate,
	tagName: 'div',
	className: 'hero-unit',

	render: function(event) {
    this.$el.html(this.template);
    this.updateMainView(this.el, 1, true);
    return this;
	}

});
