/* global $ */
// Declare global variables.
var board;
var playerMarker;
var computerMarker;
var computerStarts;
var computerMoves;
var gameOver;

// Define functions.
function chooseX() {
	$('#game-top').html('<p>You are playing: X</p>');
	playerMarker = 'X';
	startGame();
}

function chooseO() {
	$('#game-top').html('<p>You are playing: O</p>');
	playerMarker = 'O';
	startGame();
}

function setComputerMarker() {
	playerMarker == 'X' ? computerMarker = 'O' : computerMarker = 'X';
}

function startGame() {
	setComputerMarker();
	$('#prompt').css('display','none');
	$('#btn-land').css('display','inherit');
	if (computerStarts) {moveComputer();}
}

function lockButtons() {
	for (var i = 1; i < 10; i++) {
		$('#' + i.toString())[0].disabled = true;
	}
}

function unlockButtons() {
	for (var i = 1; i < 10; i++) {
		$('#' + i.toString())[0].disabled = false;
	}
}

function moveComputer() {
	var move = computerMoves.pop();
	if (board[move] === undefined) {
		$('#' + move.toString()).html('<p>' + computerMarker + '</p>');
		board[move] = computerMarker;
	} else {
		moveComputer();
	}
	winCheck();
}

function progressGame() {
	winCheck();
	if (!gameOver) {
		moveComputer();
	}
}

function reset() {
	$('#1').html('');
	$('#2').html('');
	$('#3').html('');
	$('#4').html('');
}

function update1 () {

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
	$('#x').click(chooseX);
	$('#o').click(chooseO);
	$('#reset').click(reset);
	
	$("#1").click(update1);
	$("#2").click(update2);
	$("#3").click(update3);
	$("#4").click(update4);


	// Bind buttons to key presses.
	$(document).keyup(function(key) {
        // TODO: Add keyboard functionality.
	});
}); // Document Ready End