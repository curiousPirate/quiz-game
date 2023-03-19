//Selecting all DOM elements
const timerEl = document.querySelector("#time")
const startEl = document.querySelector("#start-screen")
const startBtn = document.getElementById("start")
const questionsEl = document.querySelector("#questions")
const questionTitleEl = document.querySelector("#question-title")
const choicesEl = document.querySelector("#choices")
const endScreenEl = document.querySelector("#end-screen")
const finalScoreEl = document.querySelector("#final-score")
const userName = document.querySelector("#initials")
const submitBtn = document.querySelector("#submit")
const feedBackEl = document.querySelector("#feedback")

//Timer set to 100 secs
var secondsLeft = 100

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

//Start quiz function
function startQuiz () {
  startEl.classList.add("hide")
  questionsEl.classList.remove("hide")
  displayQuestions()
  startCountdown()
}

//Start btn event listener
startBtn.addEventListener("click", startQuiz)

function displayQuestions() {
  for(i = 0; i <= questions.length; i++) {
    questionTitleEl.textContent = questions[i].question
    choicesEl.textContent = questions[i].options
  }
}

