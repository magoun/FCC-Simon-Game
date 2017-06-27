/* global $ */
// Declare global variables.
var sequence = [];

// Define functions.
function startGame() {
	// Get first move.
	sequence.push(getNextMove());
	
	// Lock start button.
	$('#start')[0].disabled = true;
	
	for (var i = 0; i < sequence.length; i++) {
		console.log(sequence[i]);
	}
}

function getNextMove() {
	return Math.floor(Math.random() * 4);
}

function lockButtons() {
	$('.overlay').css('display','inherit');
}

function unlockButtons() {
	$('.overlay').css('display','none');
}

function reset() {
	// Unlock start button.
	$('#start')[0].disabled = false;
	
	sequence = [];
}

function red () {
    $('.btn-red').toggleClass("redActive");
    var that = $('.btn-red'), delay = setTimeout(function () {
          that.toggleClass("redActive");
    }, 300);
}

function update2 () {

}

function update3 () {

}

function update4 () {

}


$(document).ready(function() {
	// Initialize game state.

	// Update game state for button clicked.
	$('#start').click(startGame);
	$('#strict').click(lockButtons);
	
	$("#1").click(update1);
	$("#2").click(update2);
	$("#3").click(update3);
	$("#4").click(update4);
	
	$('#reset').click(reset);


	// Bind buttons to key presses.
	$(document).keyup(function(key) {
        // TODO: Add keyboard functionality.
	});
}); // Document Ready End