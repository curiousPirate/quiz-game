function displayHighScores() {
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  var highScoreList = document.getElementById("high-scores");

  // Clear the existing content in the high score list
  highScoreList.innerHTML = "";

  // Create a new li element for each high score and append it to the list
  for (var i = 0; i < highScores.length; i++) {
    var highScore = highScores[i];
    var li = document.createElement("li");
    li.textContent = highScore.initials + " - " + highScore.score;
    highScoreList.appendChild(li);
  }
}
displayHighScores();

// To clear the storage
let clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  // Update the high score list on the page
  displayHighScores();
});
