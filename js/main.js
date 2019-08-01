// Main functions
// function start
function start() {  
  M.toast({html: 'Time to focus!', classes: 'rounded'})
  var audio2 = new Audio('audio/start-work.mp3');
  audio2.play();
  if(workSession) {
    clearInterval(workSession);
    workSession = null;
  } else {
    clearInterval(breakSession);
    breakSession = null;
  }
  count = workClicks * 60;
  workSession = setInterval(workCountDown, 1000);
  disableResume();
  document.getElementById("logo-container").innerHTML = "WORK TIME";
} //end of function

// function startBreak
function startBreak() {  
  var audio = new Audio('audio/start-break.mp3');
  audio.play();
  count = workClicks * 60;
  breakSession = setInterval(breakCountDown,1000); 
  disableResume();
  M.toast({html: 'Time to take a break.', classes: 'rounded'})
  document.getElementById("logo-container").innerHTML = "BREAK TIME";
} // end of function

// function pause
function pause() {
  M.toast({html: 'See you soon!', classes: 'rounded'})
  clearInterval(workSession);
  clearInterval(breakSession);
  workSession = null;
  breakSession = null;
  document.getElementById("resume").disabled = false;
} //end of function

// function resume
function resume() {
  M.toast({html: 'Welcome back.', classes: 'rounded'})
  workSession = setInterval(workCountDown, 1000);
  disableResume();  
} //end of function

// function stop
function stop() {
  M.toast({html: 'Ok... bye.', classes: 'rounded'})
  if(workSession) {
    clearInterval(workSession);
    workSession = null;
  } else {
    clearInterval(breakSession);
    breakSession = null;
  }
  document.getElementById("showtime").innerHTML = "- - : - - : - -";  
  document.getElementById("pause").disabled = false;
  document.getElementById("resume").disabled = false;
  document.getElementById("logo-container").innerHTML = "POMODOROJS";
} // end of function