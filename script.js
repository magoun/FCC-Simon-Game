/* global $ */

// Declare global variables.
var sequence = [];
var userSequence = [];
const decoder = ['red', 'blue', 'green', 'yellow'];
const winCount = 20;
var delay = 750; //ms
var strict = false;

const redSound = new Audio('sounds/simonSound1.mp3');
const blueSound = new Audio('sounds/simonSound2.mp3');
const greenSound = new Audio('sounds/simonSound3.mp3');
const yellowSound = new Audio('sounds/simonSound4.mp3');

// Define functions.
function startGame() {
	// Get first move.
	sequence.push(getNextMove());
	
	// Populate current sequence length to user.
	$('#count').html('<p>Count: ' + sequence.length + '</p>');
	
	// Lock start and strict buttons.
	$('#start')[0].disabled = true;
	$('#strict')[0].disabled = false;
	
	playSequence();
}

function playSequence () {
	lockButtons();
	var temp = sequence.slice();
	playNext();
	
	function playNext() {
		window.setTimeout(function () {
			activateButton(temp.shift());
			temp.length > 0 ? playNext() : unlockButtons();
		}, delay);
	}
}

function activateButton (index) {
	var refColor = decoder[index];
	var that = $('.btn-' + refColor);
	that.toggleClass(refColor + 'Active');
	
	switch (refColor) {
		case 'red':
			redSound.play();
			break;
		case 'blue':
			blueSound.play();
			break;
		case 'green':
			greenSound.play();
			break;
		case 'yellow':
			yellowSound.play();
	}
	
    window.setTimeout(function () {
          that.toggleClass(refColor + 'Active');
    }, delay * 0.8);
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
	// Unlock start  and strict buttons.
	$('#start')[0].disabled = false;
	$('#strict')[0].disabled = false;
	
	// Erase count and results.
	$('#count').html('');
	$('#results').html('');
	
	sequence = [];
	userSequence = [];
}

function verifySequence () {
	var lastIndex = userSequence.length - 1;
	
	if (userSequence[lastIndex] == sequence[lastIndex]) {
		if (userSequence.length == sequence.length) {
			extendPattern();
		}
	} else {
		userMistake();
	}
}

function extendPattern() {
	if (sequence.length < winCount) {
		sequence.push(getNextMove());
		userSequence = [];
		playSequence();
		$('#count').html('<p>Count: ' + sequence.length + '</p>');
	} else {
		// User wins
		// TODO: Add logic.
	}
}

function userMistake() {
	alertError();
	userSequence = [];
	
	if (strict) {
		reset();
		startGame();
	} else {
		playSequence();	
	}
}

function alertError () {
	activateButton(0);
	activateButton(2);
	activateButton(3);
	activateButton(1);
}

function addMove (move) {
	userSequence.push(move);
	verifySequence();
}

function redPlay () {
	redSound.play();
	addMove(0);
}

function greenPlay () {
	greenSound.play();
	addMove(2);
}

function bluePlay () {
	blueSound.play();
	addMove(1);
}

function yellowPlay () {
	yellowSound.play();
	addMove(3);
}

function toggleStrict () {
	strict ? strict = false : strict = true;
	strict ? $('#strict').html('<p>Strict: On</p>') : $('#strict').html('<p>Strict: Off</p>');
}

$(document).ready(function() {
	// Update game state for button clicked.
	$('#start').click(startGame);
	$('#strict').click(toggleStrict);
	
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