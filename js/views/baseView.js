define([
    'jquery',
    'underscore',
    'backbone'    
], function($, _, Backbone) {
 
    var BaseView = Backbone.View.extend({

	updateMainView: function(html, i) {
	    var menuItems = $('ul.nav li');

	    $('#main').html(html);
	    menuItems.removeClass('active');
	    menuItems.eq(i).addClass('active');
	},
	spinner : '<div id="spinner"></div>',	
    });
    
    return BaseView;
});
