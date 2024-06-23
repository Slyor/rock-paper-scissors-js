//define initial values
let userChoice
let computerChoice
let result

//returns a random number between 0 and max value as a float, then rounds it to the nearest integer
function getRandomInt(max){
  return Math.floor(Math.random() * max)
}


//These 3 functions define the value of userChoice, depending on which one he clicks in the HTML
function rock(){
  userChoice = "rock";
}
function paper(){
  userChoice = "paper"
}
function scissors(){
  userChoice = "scissors"
}

/*
Gets a random number between 0 and 3. Not inclusive, because 3 is not included. Numbers can be 0,1 or 2.
Defines an array "rps" with 3 values.
The computer choice is then converted from the random integer to a key value in the array "rps"
*/
function computerChoose(){
  computerChoice = getRandomInt(3);
  rps = ["rock", "paper", "scissors"];
  computerChoice = rps[computerChoice];
}


//show the result of the game
function showResult(){
  if (userChoice == computerChoice){
    result = "Draw!"
  } else if (userChoice == "rock" && computerChoice == "scissors"
    || userChoice == "paper" && computerChoice == "rock"
    || userChoice == "scissors" && computerChoice == "paper") {
    result = "You win!"
  } else{
    result = "You lose!"
  } 
  alert(`${result.toUpperCase()} \n\nYou chose ${userChoice}, computer chose ${computerChoice}!`)
}

function userClick(action1,action2,action3){
  action1()
  action2()
  action3()
}

/*

TO DO:
- Add dark mode.

/*





DONE:
- after user chooses rock, paper or scissors, it should automatically choose for the computer. The user shouldnt have to click a button for the computer.
- Also make the result execute automatically after one of the three buttons are clicked, and give instructions with explanations using text in the HTML.
- For this to be achieved, I must learn callback functions.

*/

// IGNORE TESTING IGNORE
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
