var app = app || {};

define([
	'jquery',
	'underscore',
	'backbone',
	'models/data',
	'text!templates/links.html'
], function($,_,Backbone,DataModel,linksView){

	app.Links = Backbone.View.extend({
		el: "#current-view",

		initialize: function() {
			this.$el.empty();
			this.render();
		},

		template: _.template(linksView),

		render: function() {
			var that = this;
			if (app.myInfo) {
				var viewTemplate = that.template(app.myInfo);
				that.$el.append(viewTemplate);
			} else {
				var data = new app.Data();
	 			data.fetch({
					success: function(data) {
						app.myInfo = data.get("data");
						var viewTemplate = that.template(app.myInfo);
						that.$el.append(viewTemplate);
					}
				});
			}
		}
	});
});