var $ = require('jquery');
var Backbone = require('backbone');
var BaseView = require('./baseView');
var ContactTemplate = require('../templates/contact.html');

Backbone.$ = $;

module.exports = BaseView.extend({
	template: ContactTemplate,
	tagName: 'div',
	className: 'hero-unit',

	render: function(event) {
	 this.$el.html(this.template);
   this.updateMainView(this.el, 2, true);
	 return this;
	}

});

