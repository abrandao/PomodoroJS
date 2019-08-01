// Some variables and auxiliar functions
//Global Variables
var workDisplay = document.getElementById("work-display");
var breakDisplay = document.getElementById("break-display");
var count = 0;
var workSession;
var breakSession;
var workClicks = 25;
var breakClicks = 5;

// Disable Resume button
function disableResume() {
  if (workSession > 0)
    document.getElementById("resume").disabled = true;
  else
    document.getElementById("resume").disabled = true;
} // end of function