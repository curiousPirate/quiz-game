// Get high scores and initials from local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const initials = JSON.parse(localStorage.getItem("initials"));

// Display high scores and initials
function displayHighScores() {
  for (let i = 0; i < highScores.length; i++) {
    const scoreEl = document.createElement("li");
    scoreEl.textContent = `${initials[i]} - ${highScores[i]}`;
    highScores.appendChild(scoreEl);
  }
}

// Call the displayHighScores function to show high scores and initials on the page
displayHighScores();