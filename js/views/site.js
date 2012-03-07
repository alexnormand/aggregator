define([
    'jquery', 
    'backbone', 
    'views/baseView',
    'text!templates/site.html'
], function($, Backbone, BaseView, SiteTemplate) {

    var Site = BaseView.extend({	

	template: SiteTemplate,
	
	render: function(event) {
	    this.$el.html(this.template);

	    html = _.template(this.template,
			      {quotes: this.collection.toJSON()});

	    this.updateMainView(html, 0);
	    return this;
	}

    });

    return Site;

});
