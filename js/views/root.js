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
	    this.updateMainView(this.el, 0);
	    return this;
	}

    });

    return Root;

});
