/* global $ */
// Declare global variables.
var sequence = [];

const blueSound = new Audio('sounds/simonSound1.mp3');
const redSound = new Audio('sounds/simonSound2.mp3');
const greenSound = new Audio('sounds/simonSound3.mp3');
const yellowSound = new Audio('sounds/simonSound4.mp3');

// Define functions.
function startGame() {
	// Get first move.
	sequence.push(getNextMove());
	
	// Lock start button.
	$('#start')[0].disabled = true;
	
	playSequence();
}


// Generate random number between 0 and 3.
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
    // redSound.play();
    var that = $('.btn-red')
    setTimeout(function () {
          that.toggleClass("redActive");
    }, 300);
}

function greenPlay () {
	greenSound.play();
}

function bluePlay () {
	blueSound.play();
}

function yellowPlay () {
	yellowSound.play();
}

function redPlay () {
	redSound.play();
}


$(document).ready(function() {
	// Initialize game state.
	
	// Update game state for button clicked.
	$('#start').click(startGame);
	$('#strict').click(lockButtons);
	
	$('.btn-yellow').mousedown(yellowPlay);
	$('.btn-red').mousedown(redPlay);
	$('.btn-green').mousedown(greenPlay);
	$('.btn-blue').mousedown(bluePlay);
	
	$('#reset').click(reset);


	// Bind buttons to key presses.
	$(document).keyup(function(key) {
        // TODO: Add keyboard functionality.
	});
}); // Document Ready End