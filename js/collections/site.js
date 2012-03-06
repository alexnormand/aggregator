define(['backbone', 'models/quote'], function(Backbone, Quote) {
 
    var Site = Backbone.Collection.extend({
	model : Quote,

	initialize: function(models, options) {
	    this.url = 'get/' + options.sitename;
	}
    });
    
    return Site;
});
