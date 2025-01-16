const cards = document.querySelectorAll(".card");
const startButton = document.getElementById("startButton");
const timer = document.getElementById('timer');
const result = document.getElementById('result')

let timerInterval;
let seconds = 0;
let flippedCrads = [];
let guessedCards = 0;

startButton.addEventListener('click', (e) => {
    startTimer()
})

function startTimer() {
    timerInterval = setInterval(()=> {
        seconds++;
        timer.textContent = "Time: " + seconds + " seconds"
    }, 1000)
}
function stopTimer () {
    clearInterval(timerInterval);
    result.textContent = "You finished in " + seconds + "seconds!"
}

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (flippedCrads.length >= 2) {
      return;
    } else {
      card.classList.add("flipped");
      flippedCrads.push(card);
    }

    if (flippedCrads.length == 2) {
      chekforMatch();
    }
  });
});

function chekforMatch() {
  const [card1, card2] = flippedCrads;

  const img1 = card1.querySelector(".back-view img").src;
  const img2 = card2.querySelector(".back-view img").src;

  if (img1 == img2) {
    flippedCrads = [];
    guessedCards++;
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCrads = [];
    }, 500);
  }


  if (guessedCards == 8) {
    stopTimer()
  }
}
