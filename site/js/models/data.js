var app = app || {};

define([
	'jquery',
	'underscore',
	'backbone'
], function($,_,Backbone){
	app.Data = Backbone.Model.extend({
		url: "js/lib/data.json"
	});
});
