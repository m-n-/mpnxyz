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
			this.render();
		},

		events: {
			'click #nav div':'showSection'
		},

		template: _.template(skeletonView),

		render: function() {
			var skeletonTemplate = this.template();
			this.$el.append(skeletonTemplate);
		},

		showSection: function(section) {
			// var this_data = this.data("name");
			var selected_section = $(section.currentTarget).data("name");
			
			switch(selected_section){
				case "cv":
					break;
				case "links":
					require(['views/links'], function() {
						new app.Links();
					});
					break;
				case "work":
					break;
			}
		}
	});
});