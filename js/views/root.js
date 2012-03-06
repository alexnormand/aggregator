define([
    'jquery', 
    'backbone',
    'views/baseView',
    'text!templates/root.html'
], function($, Backbone, BaseView, RootTemplate) {

    var Root = BaseView.extend({	

	template: RootTemplate,
	tagName: 'div',
	className: 'container',

	render: function(event) {
	    this.$el.html(this.template);
	    return this;
	}

    });

    return Root;

});
