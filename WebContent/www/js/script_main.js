'use strict';

var $ = require('jQuery');

$(function() {
	var inputElement = $('#input');
	inputElement.on('focusout', function(){
		var input = inputElement.val();
		console.log("input=", input);

		$("#output").text(input);
	});
});