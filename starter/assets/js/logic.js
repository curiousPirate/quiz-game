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

//User input records
var correctAnswer = 0
var wrongAnswer = 0

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
  feedBackEl.classList.remove("hide")
  displayQuestions()
  startCountdown()
}

//Start btn event listener
startBtn.addEventListener("click", startQuiz)

// function displayQuestions() {
//   for(i = 0; i < questions.length; i++) {
//     questionTitleEl.textContent = questions[i].question

//     // Clear the existing choice buttons
//     choicesEl.innerHTML = ""

//     // Create a button element for each option and append it to the choices element
//     for (j = 0; j < questions[i].options.length; j++) {
//       let choiceBtn = document.createElement("button")
//       choiceBtn.textContent = questions[i].options[j]
//       choicesEl.appendChild(choiceBtn)
//       choicesEl.appendChild(document.createElement("br"))
//       choiceBtn.style.marginBottom = "10px" 
//     }
//   }
// }

function displayQuestions() {
  for (let i = 0; i < questions.length; i++) {
    // Set the question title
    questionTitleEl.textContent = questions[i].question

    // Clear the choices container
    choicesEl.innerHTML = ""

    // Create a button for each choice and append it to the choices container
    for (let j = 0; j < questions[i].options.length; j++) {
      const choiceBtn = document.createElement("button")
      choiceBtn.innerHTML = questions[i].options[j]
      choiceBtn.classList.add("choice")
      choicesEl.appendChild(choiceBtn)

      // Add an event listener to the button
      choiceBtn.addEventListener("click", function () {
        // Check if the user's response is correct
        const userResponse = choiceBtn.innerHTML
        const correctAnswer = questions[i].answer
        if (userResponse === correctAnswer) {
          correctAnswer++
          feedBackEl.textContent = "Correct!"
        } else {
          wrongAnswer++
          feedBackEl.textContent = "Wrong!"
        }
      });
    }
  }
}


