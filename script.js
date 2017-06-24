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
	gameOver = false;
	$('#game-top').html('');
	$('#prompt').css('display','inherit');
	$('#btn-land').css('display','none');
	$('#results').css('display','none');
	clearBoard();
	unlockButtons();
	playerMarker = "";
	computerMarker = "";
	computerMoves = shuffle([1,2,3,4,5,6,7,8,9]);
	computerStarts = Math.floor(Math.random() * 2) == 1 ? true : false;
}

function clearBoard() {
	board = new Array(10);
	$('#1').html('');
	$('#2').html('');
	$('#3').html('');
	$('#4').html('');
	$('#5').html('');
	$('#6').html('');
	$('#7').html('');
	$('#8').html('');
	$('#9').html('');
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

function update5 () {
	if ($('#5').html() == "") {
		$('#5').html('<p>' + playerMarker + '</p>');
		board[5] = playerMarker;
		progressGame();
	}
}

function update6 () {
	if ($('#6').html() == "") {
		$('#6').html('<p>' + playerMarker + '</p>');
		board[6] = playerMarker;
		progressGame();
	}
}

function update7 () {
	if ($('#7').html() == "") {
		$('#7').html('<p>' + playerMarker + '</p>');
		board[7] = playerMarker;
		progressGame();
	}
}

function update8 () {
	if ($('#8').html() == "") {
		$('#8').html('<p>' + playerMarker + '</p>');
		board[8] = playerMarker;
		progressGame();
	}
}

function update9 () {
	if ($('#9').html() == "") {
		$('#9').html('<p>' + playerMarker + '</p>');
		board[9] = playerMarker;
		progressGame();
	}
}
// Function for randomizing computer moves.
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


$(document).ready(function() {
	// Initialize game state.
	reset();

	// Update game state for button clicked.
	$('#x').click(chooseX);
	$('#o').click(chooseO);
	$('#reset').click(reset);
	
	$("#1").click(update1);
	$("#2").click(update2);
	$("#3").click(update3);
	$("#4").click(update4);
	$("#5").click(update5);
	$("#6").click(update6);
	$("#7").click(update7);
	$("#8").click(update8);
	$("#9").click(update9);

	// Bind buttons to key presses.
	$(document).keyup(function(key) {
        // TODO: Add keyboard functionality.
	});
}); // Document Ready End