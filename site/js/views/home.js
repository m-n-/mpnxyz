var app = app || {};

define([
	'jquery',
	'underscore',
	'backbone',
	'models/data',
	'text!templates/home.html'
], function($,_,Backbone,DataModel,homeView){

	app.Home = Backbone.View.extend({
		el: "#current-view",

		initialize: function() {
			this.render();
		},

		events: {
			'click .next':'next'
		},

		template: _.template(homeView),

		render: function() {
			var that = this;
			var data = new app.Data();
			var myInfo = {};
			data.fetch({
				success: function(data) {
					myInfo = data.get("about");
					var homeTemplate = that.template(myInfo);
					that.$el.append(homeTemplate);
					$("#home > div").addClass("main-animate");
					$("#home").addClass("page-animate").removeClass('see-through');
				}
			});
		},

		next: function() {
			console.log("hi");
		}
	});
});