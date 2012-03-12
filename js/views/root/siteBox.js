define([
    'jquery', 
    'backbone',  
    'text!templates/root/siteBox.html'
], function($, Backbone, siteBoxTemplate) {

    var SiteBox = Backbone.View.extend({	

	template: siteBoxTemplate,
	parentElement : $('.row'),
	//tagName: 'div',
	//bclassName: 'span4 site-box',


	initialize: function(options) {	  
	    this.name = options.name;
	    this.collection.bind('reset', this.render, this); 	    
	},

	render: function(event) {
	    var html = _.template(this.template,
				  {quotes: this.collection.pluck('content').slice(0,3),
				   name: this.name,
				   id: this.id
				  });
	    
	    this.$el.removeClass('loader')
		    .hide()
		    .html(html)	  
		    .fadeIn('slow');	    
	    return this;
	}

    });

    return SiteBox;
});
