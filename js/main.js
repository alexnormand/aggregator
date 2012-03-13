require.config({
    paths : {
	text: 'lib/requirejs/text',
	order: 'lib/requirejs/order',
	fastclick: 'lib/fastclick',
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
     'fastclick',
     'bootstraptransition', 
     'bootstrapcollapse'], 
    function ($, _, Backbone, Router, FastClick) {

	var router = new Router;
	Backbone.history.start();

	//Add FastClick for native-like tapping on smartphones
	new FastClick(document.body);
	
	if(!window.location.hash)
	    router.navigate('/', true);	
		
    });
