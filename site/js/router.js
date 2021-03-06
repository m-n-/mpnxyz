var app = app || {};


define([
	'jquery',
	'underscore',
	'backbone'
], function($,_,Backbone) {
	app.Router = Backbone.Router.extend({
		routes: {
			"":"home",
			"links":"links",
			"projects":"projects"
		},
		initialize: function() {

		}
	});

	var router = new app.Router;

	router.on('route:home', function() {
		require(['views/home','views/skeleton'], function() {
			new app.Skeleton();
			new app.Home();
		});
	});

	router.on('route:links', function() {
		require(['views/links','views/skeleton'], function() {
			new app.Skeleton();
			new app.Links();
		});
	});

	router.on('route:projects', function() {	
		require(['views/projects','views/skeleton'], function() {
			new app.Skeleton();
			new app.Projects();
		});
	});
	
	Backbone.history.start();
});



	
