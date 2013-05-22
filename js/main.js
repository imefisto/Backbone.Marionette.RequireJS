//Config taken from:
//https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
	
require.config({
	paths: {
		jquery: 'libs/jquery.min',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		marionette: 'libs/backbone.marionette.min',
		tpl: 'templates/tpl'
	},
	shim:{
		jquery: {
			exports: 'jquery'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery','underscore'],
			exports: 'Backbone'
		},
		marionette: {
			deps: ['backbone'],
			exports: 'Marionette'
		}

	}
});

require(['app'], function(app) {
	app.start();
});
