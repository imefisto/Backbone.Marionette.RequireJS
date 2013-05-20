define(['marionette','views/test'],
       function(Marionette,TestView) {
	       // set up the app instance
	       var MyApp = new Marionette.Application();

	       // configuration, setting up regions, etc ...
	       MyApp.addRegions({
		       mainRegion: '#container'
	       });

	       MyApp.addInitializer(function(options) {
		       var testView = new TestView();
		       MyApp.mainRegion.show(testView);
	       });

	       // export the app from this module
	       return MyApp;
       });
