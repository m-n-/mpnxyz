var app = app || {};

define([
	'jquery',
	'underscore',
	'backbone',
	'models/data',
	'text!templates/projects.html'
], function($,_,Backbone,DataModel,projectsView){

	app.Projects = Backbone.View.extend({
		el: "#current-view",

		initialize: function() {
			this.render();
		},

		template: _.template(projectsView),

		render: function() {
			var that = this;
			if (app.myInfo) {
				that.renderUX();
			} else {
				var data = new app.Data();
	 			data.fetch({
					success: function(data) {
						app.myInfo = data.toJSON();
						that.renderUX();
					}
				});
			}
		},

		renderUX: function() {
			var that = this;		
			var viewTemplate = that.template(app.myInfo);
			that.$el.append(viewTemplate);				
			$("#projects").addClass('page-animate');
			$(".section_title").addClass('title-animate');

			$.each($(".project"), function(i, el) {

				setTimeout(function(){
			       	$(el).addClass('project-animate');
			    },200 + ( i * 200 ));

			});

			// $(".project").each(function() {
			// 	setTimeout(function() {
			// 		$(this).addClass('page-animate').css("display","inline-block");
			// 	}, 450);
				
			// });
		}
	});
});