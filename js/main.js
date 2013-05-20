//Config taken from:
//https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
	
require.config({
	paths: {
		jquery: 'libs/jquery.min',
		underscore: 'libs/underscore-min',
		backbone: 'libs/backbone-min',
		marionette: 'libs/backbone.marionette.min',
		tpl: 'templates/tpl'
	},
	shim:{
		jquery: {
			exports: 'jQuery'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery','underscore'],
			exports: 'Backbone'
		},
		marionette: {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Marionette'
		}

	}
});

require(['app'], function(app) {
	app.start();
});
