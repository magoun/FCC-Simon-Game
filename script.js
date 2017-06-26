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

function winCheck() {
	// Top left to bottom right diagonal
	if (board[1] === board [5] && board[5] === board[9] && board[9] != undefined) {
		announceWinner(board[1]);
	}
	// Bottom left to top right diagonal
	if (board[7] === board [5] && board[5] === board[3] && board[3] != undefined) {
		announceWinner(board[7]);
	}
	// Left col
	if (board[1] === board [4] && board[4] === board[7] && board[7] != undefined) {
		announceWinner(board[1]);
	}
	// Mid col
	if (board[2] === board [5] && board[5] === board[8] && board[8] != undefined) {
		announceWinner(board[2]);
	}
	// Right col
	if (board[3] === board [6] && board[6] === board[9] && board[9] != undefined) {
		announceWinner(board[3]);
	}
	// Top row
	if (board[1] === board [2] && board[2] === board[3] && board[3] != undefined) {
		announceWinner(board[1]);
	}
	// Mid row
	if (board[4] === board [5] && board[5] === board[6] && board[6] != undefined) {
		announceWinner(board[4]);
	}
	// Bot row
	if (board[7] === board [8] && board[8] === board[9] && board[9] != undefined) {
		announceWinner(board[7]);
	}
	
	// Check for draw
	if (!gameOver) {
		var drawGame = true;
	
		for (var j = 1; j < 10; j++) {
			if (board[j] === undefined) {
				drawGame = false;
			}
		}
		
		if (drawGame) {
			announceWinner('draw');
		}
	}
}

function announceWinner(winner) {
	lockButtons();
	gameOver = true;
	if (winner == computerMarker) {
		$('#results').html('<p>You lost!</p>');
	} else if (winner == playerMarker) {
		$('#results').html('<p>You won!</p>');
	} else {
		$('#results').html('<p>Draw</p>');
	}
	
	$('#results').css('display','inherit');
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
	
}

function clearBoard() {
	board = new Array(10);
	$('#1').html('');
	$('#2').html('');
	$('#3').html('');
	$('#4').html('');
}

function update1 () {
	if ($('#1').html() == "") {
		$('#1').html('<p>' + playerMarker + '</p>');
		board[1] = playerMarker;
		progressGame();
	}
}

function update2 () {
	if ($('#2').html() == "") {
		$('#2').html('<p>' + playerMarker + '</p>');
		board[2] = playerMarker;
		progressGame();
	}
}

function update3 () {
	if ($('#3').html() == "") {
		$('#3').html('<p>' + playerMarker + '</p>');
		board[3] = playerMarker;
		progressGame();
	}
}

function update4 () {
	if ($('#4').html() == "") {
		$('#4').html('<p>' + playerMarker + '</p>');
		board[4] = playerMarker;
		progressGame();
	}
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