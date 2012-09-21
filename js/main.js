require.config({
    paths : {
	      text: 'lib/requirejs/text',
	      order: 'lib/requirejs/order',
	      jquery: 'lib/jquery',
	      fastclick: 'lib/fastclick',
	      bootstraptransition: 'lib/bootstrap-transition',
	      bootstrapcollapse: 'lib/bootstrap-collapse',
	      underscore: 'lib/underscore',
	      backbone: 'lib/backbone'
    }
});

require(
    ['order!jquery',
     'order!underscore',
     'order!backbone',
     'order!routers/router',
     'fastclick',
     'order!bootstraptransition',
     'order!bootstrapcollapse'],
    function ($, _, Backbone, Router, FastClick) {

	      var router = new Router;
	      Backbone.history.start();

	      //Add FastClick for native-like tapping on smartphones
	      new FastClick(document.body);

	      if(!window.location.hash)
	          router.navigate('/', true);

    });
