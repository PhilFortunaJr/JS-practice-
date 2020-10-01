//Let's Play Rock, Paper, Scissors!
//Global Variables
var userChoice;
var computerChoice;
var winner;
var playerRunningTotal;
var computerRunningTotal;

function getPlayerMove () {
  userChoice = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
  return userChoice;
}


function getComputerMove () {
  var randomNumber = Math.random();
  if (randomNumber < 0.33) {
    computerChoice = "rock";
  } else if (randomNumber < 0.66) { 
    computerChoice = "paper"; 
  } else {
    computerChoice = "scissors";
    }
  return computerChoice;
}

function getWinner(playerMove, computerMove) 
   {
   if (playerMove === computerMove) {
        winner = "tie";
      }  
    else if (playerMove === "rock" && computerMove === "scissors" ||
      playerMove === "paper" && computerMove === "rock" ||
      playerMove === "scissors" && computerMove === "paper"  
      ) {
        winner = "player"; 
      }    else {
       winner = "computer";
      }
  return winner;
}

function playToFive () {
 console.log("Let's play Rock Paper Scissors");
  playerRunningTotal = 0; 
   computerRunningTotal = 0;  
    while (playerRunningTotal < 5 && computerRunningTotal < 5) {
    userChoice = getPlayerMove();
    computerChoice = getComputerMove();
    winner = getWinner(userChoice, computerChoice);

    if (winner === 'player') {
      playerRunningTotal++;
    } else if (winner === 'computer') {
      computerRunningTotal++;
    }

    alert("Player chose " + userChoice + " while Computer chose " + computerChoice + "! \nThe score is Player "+ playerRunningTotal + ", Computer " + computerRunningTotal + ".");
  }
}

playToFive();
