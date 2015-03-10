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

		template: _.template(homeView),

		render: function() {
			var that = this;

			if (app.myInfo) {
				var viewTemplate = that.template(app.myInfo);
				that.$el.append(viewTemplate);
				$("#home > div").addClass("main-animate");
				$("#home").addClass("page-animate");
			} else {
				var data = new app.Data();
				app.myInfo = {};
				data.fetch({
					success: function(data) {
						app.myInfo = data.toJSON();
						var homeTemplate = that.template(app.myInfo);
						that.$el.append(homeTemplate);
						$("#home > div").addClass("main-animate");
						$("#home").addClass("page-animate");
					}
				});
			}
		}
	});
});