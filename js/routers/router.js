define(
    ['jquery', 
     'backbone',
     'views/root',
     'views/about',
     'views/contact',
     'views/site',
     'collections/site'
    ], function($, Backbone, RootView, AboutView, ContactView, SiteView, Site) {

    var Router = Backbone.Router.extend({

	routes: {
	    ""        : "root",
	    "about"   : "about",
	    "contact" : "contact",
	    ":sitename"   : "site"	    
	},

	root : function () {
	    var view = new RootView;
	    view.render();
	},

	about : function() {
	    var view = new AboutView;
	    view.render();
	},

	contact : function() {
	    var view = new ContactView;
	    view.render();
	},

	site: function(sitename) {
	    var site  = new Site(null, {sitename: sitename}),
	        view  = new SiteView({collection: site });

	    $.getJSON(site.url, function(json) {
		site.reset(json);
		view.render();
	    });	    
	}	
    });


    return Router;

});
