define([
    'jquery', 
    'backbone',
    'views/baseView',
    'views/root/siteBox',
    'collections/site',
    'text!templates/root/root.html'
], function($, Backbone, BaseView, SiteBoxView, Site, RootTemplate) {

    var Root = BaseView.extend({	

	template: RootTemplate,
	tagName: 'div',
	className: 'container',

	render: function(event) {
	    this.$el.html(this.template);	  
	    this.updateMainView(this.el, 0);

	    _.each(this.options.sites, function(s, key) {
		var site  = new Site(null, {sitename: key}),
	            view  = new SiteBoxView({collection: site,
                                             name: s.site,
					     id: key,
					     el: document.getElementById(key)
					    });		

		$.getJSON(site.url, function(json) {
		    site.reset(json);
		});	    		
	    });	    

	    return this;
	}

    });

    return Root;

});
