var app = app || {};

define([
	'jquery',
	'underscore',
	'backbone',
	'models/data',
	'text!templates/skeleton.html'
], function($,_,Backbone,DataModel,skeletonView){

	app.Skeleton = Backbone.View.extend({
		el: "#app",

		initialize: function() {
			this.$el.empty();
			this.render();
		},

		// events: {
		// 	'click #home_btn':'goHome'
		// },

		template: _.template(skeletonView),

		render: function() {
			var skeletonTemplate = this.template();
			this.$el.append(skeletonTemplate);
		}
	});
});