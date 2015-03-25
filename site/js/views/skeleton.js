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

		events: {
			'click #about_btn':'toggleAbout'
		},

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
		},

		toggleAbout: function(e) {
			e.preventDefault();
			$('#about_bubble').toggle();
		}
	});
});