var app = app || {};

// self executing function to create books object
require.config({
	baseUrl: "js",
	paths: {
		'jquery':'lib/jquery.min',
		'underscore': 'lib/underscore-min',
		'backbone': 'lib/backbone-min',
		'helpers':'helpers',
		'router': 'router',
		'text': 'lib/text'
	},
	shim: {
		'lib/underscore-min': {
			exports: '_'
		},
		'lib/backbone-min': {
			deps: ['lib/underscore-min','jquery'],
			exports: 'Backbone'
		}
	}
});

require(['router'], function() {});
