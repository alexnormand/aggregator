require.config({
    paths : {
	text: 'lib/requirejs/text',
	order: 'lib/requirejs/order',
	bootstraptransition: 'lib/bootstrap-transition',
	bootstrapcollapse: 'lib/bootstrap-collapse',
	underscore: 'lib/underscore',
	backbone: 'lib/backbone'
    },
});

require(
    ['jquery',
     'underscore',
     'backbone', 
     'order!routers/router',
     'bootstraptransition', 
     'bootstrapcollapse'], 
    function ($, _, Backbone, Router) {

	var router = new Router;
	Backbone.history.start();

	if(!window.location.hash)
	    router.navigate('/', true);	
		
    });
