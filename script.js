//define initial values
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

function getRandomInt(max){
  //returns a random number between 0 and max value as a float, then rounds it to the nearest integer
  return Math.floor(Math.random() * max)
}

function getComputerChoice(){
  computerChoice = getRandomInt(3);
  // Gets a random number between 0 and 3. Not inclusive, because 3 is not included. Numbers can be 0,1 or 2.
  rps = ["rock", "paper", "scissors"];
  // The computer choice is then converted from the random integer to a key value in the array "rps"
  computerChoice = rps[computerChoice];
}

//checks in which conditions the user would win, in others the pc

function playRound(){
  userScore = 0;
  computerScore = 0;
}

let winner = "";
function chooseWinner(){
  if (userScore > computerScore){
    winner = "User"
  } else{
    winner = "Computer"
  }
}

function calculateScore(){
  if (userScore == 5 || computerScore == 5){
    chooseWinner();
    alert(`${winner} wins!`)
    if(confirm("Play again?")){
      playRound()
    } else{
      return};
  }
  else if (userChoice == computerChoice){
    return 
  } else if (userChoice == "rock" && computerChoice == "scissors"
    || userChoice == "paper" && computerChoice == "rock"
    || userChoice == "scissors" && computerChoice == "paper") {
    return userScore = ++userScore
  } else{
    return computerScore = ++computerScore
  }
}


const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button")
const rockButton = document.querySelector("#rock-button")
const scoreBox = document.querySelector("#displayScore")


function displayScore(){
  scoreBox.textContent = `Your score is: ${userScore} PC score is: ${computerScore}`;
}

function chooseUserRPS(choice){
  userChoice = choice;
  getComputerChoice();
  calculateScore();
}


rockButton.addEventListener("click", () => {
  chooseUserRPS("rock");
  displayScore();
})
paperButton.addEventListener("click", function(){
  chooseUserRPS("paper");
  displayScore();
})
scissorsButton.addEventListener("click", function(){
  chooseUserRPS("scissors");
  displayScore();
})



// for (userScore = 0, computerScore = 0; userScore < 2 || computerScore < 2; calculateScore()){
//   if (userScore == 2 || computerScore == 2){
//     alert("over")
//     break
//   }
//   continue
// }

// let gameOver = false;

// if (userScore == 5 || computerScore == 5){
//   gameOver = true;
// }



// While the score is lower than 5, continue playing the game. When the score reaches 5 or above, stop the game and print a message telling the user who won. The winner is the user who first reaches a score of 5, the other is a loser. Create a new variable called gameOver that has a boolean value true or false. Make a for loop that checks if the score criteria is met and set the value of gameOver to true if it has been met. If game over is true, print a message alerting the user of the result and stop the code.
// change the showScore function so it shows the score in a seperate div, as a message for the user in the UI

/*
TO DO:
- Add dark mode.
- add div that shows the result of each game.
- add score in the game, when one player's score reaches 5 end the game
/*

DONE:
- after user chooses rock, paper or scissors, it should automatically choose for the computer. The user shouldnt have to click a button for the computer.
- Also make the result execute automatically after one of the three buttons are clicked, and give instructions with explanations using text in the HTML.
- For this to be achieved, I must learn callback functions.











// IGNORE
// if (userChoice == "rock" && computerChoice == "paper"){
//   result = "You win!"
// } else if (userChoice == "paper" && computerChoice == "rock"){
//   result = "You win!"
// } else if (userChoice == "scissors" && computerChoice == "paper"){
//   result = "You win!"
// } else if (userChoice == computerChoice){
//   result = "Draw"
// } else {
//   result = "You lose!"
// }

// alert(userChoice + " " + computerChoice + " " + result)
*/