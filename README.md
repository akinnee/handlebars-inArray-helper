handlebars-inArray-helper
=========================

A conditional helpers for handlebars to check if a value is in an array

# Usage

### in JavaScript

  var arrayOfStuff = ['apples', 'oranges'];

### in handlebars template

  {{#inArray arrayOfStuff 'apples'}}
	This will output
	{{else}}
	This will not
	{{/inArray}}
	
	{{#inArray arrayOfStuff 'cannonballs'}}
	This will not output
	{{else}}
	This will
	{{/inArray}}
