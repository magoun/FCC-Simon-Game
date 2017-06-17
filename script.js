// Declare global variables.
    var pomodoro = new Timer({
         tick    : 0.1,
         ontick  : function() { updateDisplay(); },
         onstart : function() { $('#clock-land').css('background', '#FF0000'); },
         onstop  : function() { $('#clock-land').css('background', '#A9A9A9'); },
         onpause : function() { console.log('timer set on pause') },
         onend   : function() { $("#output").text("0:00"); $('#clock-land').css('background', '#008000'); }
    });
    var pomodoroTime = 25 * 60; // 25 minutes

// Define functions.
    function updateDisplay() {
        if (pomodoro.getDuration() === 0) {
            dTime = pomodoroTime;
        } else {
            dTime = Math.ceil(pomodoro.getDuration() / 1000); // Remaining time in s
        }

        pMin = Math.floor(dTime / 60).toString();
        pSec = Math.floor(dTime - (pMin * 60));
        pSec < 10 ? pSec = "0" + pSec.toString() : pSec = pSec.toString();
        timeString = pMin + ":" + pSec;
        $("#output").text(timeString);
    }
    
    function addTime() {
        pomodoroTime += 60;
        updateDisplay();
    }
    
    function subtractTime() {
        if (pomodoroTime > 60) {
            pomodoroTime -= 60;
            updateDisplay();
        }
    }
    
    function start() {
        pomodoro.start(pomodoroTime);
    }
    
    function stop() {
        pomodoro.stop();
        updateDisplay();
    }

$(document).ready(function() {
	// Set initial state of clock.
	updateDisplay();
	
	// Bind click events for buttons.
	$("#addTime").click(addTime);
	$("#subtractTime").click(subtractTime);
	$("#start").click(start);
	$("#stop").click(stop);

	
	// Bind buttons to key presses.
	$(document).keyup(function(key) {
        // TODO: Add keyboard functionality.
	});
}); // Document Ready End