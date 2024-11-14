const startEl = document.getElementById("start"); /* create constant for start button element */
const stopEl = document.getElementById("stop"); /* create constant for stop button element */
const resetEl = document.getElementById("reset"); /* create constant for reset button element */
const breakEl = document.getElementById("break"); /* create constant for break button element */
const timerEl = document.getElementById("timer"); /* create constant for timer element */

let interval;
let timeLeft = 1200; /* 20 minutes = 1200 seconds */

function updateTimer() { /* create minutes and seconds from timeLeft */
    let minutes = Math.floor(timeLeft/60); /* minutes */
    let seconds = timeLeft % 60; /* seconds */
    let formattedTime = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`; /* format time in xx:xx */
    timerEl.innerHTML=formattedTime;
}
function startTimer() {
    interval=setInterval(()=>{
        timeLeft--; /* decrease time by second */
        updateTimer();
        if(timeLeft == 0) {
            clearInterval(interval); /* reset time */
            timeLeft = 1200
            alert('Rest your eyes! Click the \'Break\' button and look at something 20 feet away.');
        }
    },1000) /* 1 second is 1000 milliseconds */
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1200;
    updateTimer();
}

function breakTimer() {
    clearInterval(interval);
    timeLeft = 21;
    interval=setInterval(()=>{
        timeLeft--; /* decrease time by second */
        updateTimer();
        if(timeLeft == 0) {
            clearInterval(interval); /* reset time */
            alert('Nice! Restart the timer to continue.')
        }
    },1000) /* 1 second is 1000 milliseconds */
}

startEl.addEventListener("click", startTimer); /* event handler for clicking start button */
stopEl.addEventListener("click", stopTimer); /* event handler for clicking stop button */
resetEl.addEventListener("click", resetTimer); /* event handler for clicking reset button */
breakEl.addEventListener("click", breakTimer); /* event handler for clicking break button */
