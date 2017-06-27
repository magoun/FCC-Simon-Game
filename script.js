/* global $ */

// Declare global variables.
var sequence = [0,1,2,3,0,1,2,3];
var userSequence = [];
const decoder = ['red', 'blue', 'green', 'yellow'];
var delay = 600; //ms

const redSound = new Audio('sounds/simonSound1.mp3');
const blueSound = new Audio('sounds/simonSound2.mp3');
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

function playSequence () {
	lockButtons();
	var temp = sequence.slice();
	playNext();
	
	function playNext() {
		window.setTimeout(function () {
			activateButton(temp.shift());
			temp.length > 0 ? playNext() : unlockButtons();
			console.log(temp.length);
		}, delay);
	}
}

function activateButton (index) {
	var refColor = decoder[index];
	var that = $('.btn-' + refColor);
	that.toggleClass(refColor + 'Active');
	
	switch (refColor) {
		case 'red':
			redPlay();
			break;
		case 'blue':
			bluePlay();
			break;
		case 'green':
			greenPlay();
			break;
		case 'yellow':
			yellowPlay();
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
	// Unlock start button.
	$('#start')[0].disabled = false;
	
	sequence = [];
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

function test () {
	activateButton(0);
	activateButton(1);
	activateButton(2);
	activateButton(3);
}

$(document).ready(function() {
	// Initialize game state.
	
	// Update game state for button clicked.
	$('#start').click(playSequence);
	$('#strict').click(test);
	
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