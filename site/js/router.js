var app = app || {};


define([
	'jquery',
	'underscore',
	'backbone'
], function($,_,Backbone) {
	app.Router = Backbone.Router.extend({
		routes: {
			"":"home",
			"about":"about",
			"projects":"projects"
		},
		initialize: function() {

		}
	});

	var router = new app.Router;

	router.on('route:home', function() {
		require(['views/home'], function() {
			new app.Home();
		});
	});

	router.on('route:about', function() {
		console.log("hey");
	});

	router.on('route:projects', function() {	
		var data = new app.Data();
		data.fetch({
			success: function(data) {
				var myProjects = data.get("projects");
				console.log(myProjects);
			}
		});
	});

	Backbone.history.start();
});



	
