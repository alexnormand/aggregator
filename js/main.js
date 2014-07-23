var $ = require('jquery');
var FastClick = require('fastclick');
var Backbone = require('Backbone');
var _ = require('underscore');

var Router = require('./routers/router.js');

Backbone.$ = $;


var router = new Router();
Backbone.history.start({ pushState: true });

//Add FastClick for native-like tapping on smartphones
FastClick(document.body);

if (!window.location.hash) {
  router.navigate('/', true);
}


