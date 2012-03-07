define([
    'jquery', 
    'backbone', 
    'views/baseView',
    'text!templates/contact.html'
], function($, Backbone, BaseView, ContactTemplate) {

    var Contact = BaseView.extend({	

	template: ContactTemplate,
	tagName: 'div',
	className: 'hero-unit',

	render: function(event) {
	    this.$el.html(this.template);
	    this.updateMainView(this.el, 2);
	    return this;
	}

    });

    return Contact;

});
