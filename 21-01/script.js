// const timeDisplay = document.getElementById('timer');
// const resetButton = document.getElementById('reset');
// const startButton = document.getElementById('start');
// let time = 0;
// let isRunning = false;
// let timer;

// startButton.addEventListener('click', () => {
//     startTime();
// })

// resetButton.addEventListener('click', resetTimer);

// function startTime() {
//     timer = setInterval(() => {
//         time++;
//         timeDisplay.textContent = time;
//     }, 1000)
// }

// function stopTime () {
//     isRunning = false;
//     clearInterval(timer);
//     startButton.textContent = 'Начать'
// }







let timer;
let isRunning = false; 
let time = 0;

const timeDisplay = document.getElementById('timer');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');

startButton.addEventListener('click', () => {
    if (!isRunning) {
        startButton.textContent = 'Пауза';
        startTimer();
    } else {
        stopTimer();
        startButton.textContent = 'Продолжить';
    }
});

resetButton.addEventListener('click', resetTimer);

function startTimer() {
    isRunning = true;
    timer = setInterval(() => {
        time++;
        timeDisplay.textContent = time;
    }, 1000);
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer () {
    stopTimer();
    time = 0;
    displayTime()
    startButton.textContent = "Начать";
}

function displayTime() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timeDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}`
}

function padZero(time) {
    return time < 10?`0${time}`:time;
}