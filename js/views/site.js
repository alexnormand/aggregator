define([
    'jquery', 
    'backbone', 
    'views/baseView',
    'text!templates/site.html'
], function($, Backbone, BaseView, SiteTemplate) {

    var Site = BaseView.extend({	

	template: SiteTemplate,

	initialize: function() {
	    this.collection.bind('reset', this.render, this);
	    $(document).scrollTop() !== 0 && $(document).scrollTop(0);
	},
	
	render: function(event) {	    

	    var	html = _.template(this.template,
			      {quotes: this.collection.toJSON()});

	    this.$el.html(html);
	    this.updateMainView(this.el, 0);
	    return this;
	}

    });

    return Site;

});
