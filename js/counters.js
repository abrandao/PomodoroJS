// Count time funcions

//function timeSystem
function countTime(){
  var seconds = count;
  var hours = Math.floor(seconds/3600);  
  seconds -= hours * 3600;
  seconds = seconds - (hours * 3600);  
  var minutes = Math.floor(seconds/60);
  seconds -= minutes * 60;
  var countFormula = ('00' + hours).slice(-2) +":" + ('00' + minutes).slice(-2) + ":" + ('00' + seconds).slice(-2);
  document.getElementById("showtime").innerHTML = countFormula;
  document.getElementById("title").innerHTML = countFormula;
  count--;
} // end of function

// function workCountDown
function workCountDown() {   
  countTime();
  if(count < 0) {
    clearInterval(workSession);
    workSession = null;
    document.getElementById("showtime").innerHTML = "Starting Break";
    var breakDelay = setTimeout(function(){
      startBreak();
    }, 3000);
  } //end of if
} //end of function

// function breakCountDown
function breakCountDown() {
  countTime();
  if(count < 0) {
    clearInterval(breakSession);
    breakSession = null;
    var message = setTimeout(function() {
      document.getElementById("showtime").innerHTML = "POMODORO COMPLETE";
      var audio = new Audio('audio/end-break.mp3');
      audio.play();
      M.toast({html: 'Congratulations!!', classes: 'rounded'})
      setTimeout(start, 10000);       
    }, 3000)    
  } //end of if 
} // end of function