//get a random integer, from 0 to max value
function getRandomInt(max){
  return Math.floor(Math.random() * max)
}

//asks user for a number between 0-2
let userChoice = prompt("Enter rock, paper or scissors")
let computerChoice = getRandomInt(3)
let result;

rps = ["rock", "paper", "scissors"]
computerChoice = rps[computerChoice];

if (userChoice == computerChoice){
  result = "Draw!"
} else if (userChoice == "rock" && computerChoice == "scissors"
  || userChoice == "paper" && computerChoice == "rock"
  || userChoice == "scissors" && computerChoice == "paper") {
  result = "User wins!"
} else{
  result = "Computer wins!"
}

function showResult(){
  return `${result} You chose ${userChoice}, computer chose ${computerChoice}.`
}

alert(showResult())






// TESTING
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
