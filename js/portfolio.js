'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$(“.img-thumbnail”).click(projectClick);
	function projectClick(e) {
 e.preventDefault();
 $(this).css(“background-color”, “#7fff00”)
}


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	console.log("Javascript is connected!");
}