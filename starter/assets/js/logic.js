// Selecting all DOM elements
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
const feedbackEl = document.querySelector("#feedback")


// Timer set to 100 seconds
var secondsLeft = 100;
var timerInterval;

// Timer countdown function
function startCountdown() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// Start quiz function
function startQuiz() {
  startEl.classList.add("hide");
  questionsEl.classList.remove("hide");
  feedbackEl.classList.remove("hide");
  displayQuestion();
  startCountdown();
}

let currentQuestionIndex = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionTitleEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const choiceBtn = document.createElement("button");
    choiceBtn.innerHTML = option;
    choicesEl.appendChild(choiceBtn);
    choiceBtn.addEventListener("click", function () {
      if (option === currentQuestion.answer) {
        feedbackEl.textContent = "Correct!";
      } else {
        feedbackEl.textContent = "Wrong!";
        secondsLeft -= 10;
        if (secondsLeft < 0) {
          secondsLeft = 0;
        }
      }
      currentQuestionIndex++;
      if (currentQuestionIndex === questions.length) {
        endQuiz();
      } else {
        displayQuestion();
      }
    });
  });
}


// End quiz function
function endQuiz() {
  clearInterval(timerInterval);
  questionsEl.classList.add("hide");
  endScreenEl.classList.remove("hide");
  finalScoreEl.textContent = secondsLeft;
}

// Submit score function
submitBtn.addEventListener("click", function () {
  localStorage.setItem("initials", userName.value);
  localStorage.setItem("score", secondsLeft);
  window.location.href = "highscores.html";
});

// Start quiz event listener
startBtn.addEventListener("click", startQuiz);
