

const minLabel = document.getElementById('minutes');
const secLabel = document.getElementById('seconds');
const msLabel = document.getElementById('milliseconds');

const startB = document.getElementById("startBtn");
const stopBtn = document.getElementById('stopBtn');  
const resetBtn = document.getElementById('resetBtn');
const pauseBtn = document.getElementById('pauseBtn');    
const resumeBtn = document.getElementById('resumeBtn');

let min=0;
let sec=0;
let ms=0;
let interval;

startB.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);


function startTimer(){ // to start the timer
    startB.disabled = true;
    interval = setInterval(updateTimer, 10);//start the timer counting
    stopBtn.disabled = false;
    resetBtn.disabled = true;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;

}
function stopTimer(){ // to stop the timer
    clearInterval(interval); 
    stopBtn.disabled = true;
    resetBtn.disabled = false;
    pauseBtn.disabled = true;
    displayTimer();

}
function resetTimer(){
    min = 0;
    sec = 0;
    ms = 0;
    startB.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
    pauseBtn.disabled = true;
    resumeBtn.disabled = true;
    displayTimer();

}
function pauseTimer(){
    clearInterval(interval);//stop the timer counting
    stopBtn.disabled = true;
    pauseBtn.disabled = true;
    resumeBtn.disabled = false;
   
}
function resumeTimer(){
    interval = setInterval(updateTimer, 10);
    stopBtn.disabled = false;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;
    displayTimer();

}
function displayTimer(){
    msLabel.textContent = padTime(ms);
    secLabel.innerHTML = padTime(sec);
    minLabel.innerHTML = padTime(min);
}
function updateTimer(){
    ms++;
    if(ms === 100){
        ms = 0;
        sec++;
    }
    if(sec === 60){
        sec = 0;
        min++;
    }
    displayTimer();
}

function padTime(time){
    return time.toString().padStart(2, '0');
}
