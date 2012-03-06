define([
    'jquery', 
    'backbone', 
    'views/baseView',
    'text!templates/about.html'
], function($, Backbone, BaseView, aboutTemplate) {

    var About = BaseView.extend({	

	template: aboutTemplate,
	tagName: 'div',
	className: 'hero-unit',

	render: function(event) {
	    this.$el.html(this.template);
	    return this;
	}

    });

    return About;

});
