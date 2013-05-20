define(['marionette','tpl!templates/test.tpl'], function(Marionette,testTpl) {
	var View = Marionette.ItemView.extend({
		template: testTpl
	});

	return View;
});
