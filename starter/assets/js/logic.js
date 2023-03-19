//Selecting all DOM elements
const timerEl = document.querySelector("#time")
const startEl = document.querySelector(".start")
const startBtn = document.querySelector("#start")
const questionsEl = document.querySelector("#questions")
const questionTitleEl = document.querySelector("#question-title")
const choicesEl = document.querySelector("#choices")
const endScreenEl = document.querySelector("#end-screen")
const finalScoreEl = document.querySelector("#final-score")
const userName = document.querySelector("#initials")
const submitBtn = document.querySelector("#submit")
const feedBackEl = document.querySelector("#feedback")

//Timer count down function
function startCountdown() {
  timerInterval = setInterval(function () {
    secondsLeft--
    timerEl.textContent = secondsLeft
    if (secondsLeft === 0) {
      clearInterval(timerInterval)
    }
  }, 1000)
}