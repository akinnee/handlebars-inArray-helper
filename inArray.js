define(function(require) {
	'use strict';

	var Handlebars = require('handlebars'),
		_ = require('underscore');

	Handlebars.registerHelper('inArray', function(array, value, block) {
		if (_.indexOf(array, value) !== -1) {
			return block.fn(this);
		} else {
			return block.inverse(this);
		}
	});

});