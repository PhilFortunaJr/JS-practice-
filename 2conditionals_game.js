// Generate a random number 1 - 10
var randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user for a number 1 - 10 and save that to the userGuess variable.
var userGuess = prompt("Pick a random number 1 through 10", 5);

// convert the userGuess from a string to a number
userGuess = parseInt(userGuess, 10);
var playGuessingGame = function (randomNumber, userGuess) {
    // Student code start
    if (randomNumber === userGuess) {
        console.log("Congrats! You have guessed correctly.");
    } 
    else if (randomNumber === userGuess + 1 || randomNumber === userGuess - 1) {
      console.log("Super close! The random number was " + randomNumber + ".");
    }
    else if (randomNumber === userGuess + 2 || randomNumber === userGuess - 2) {
      console.log("Close, but no cigar! The random number was " + randomNumber + ".");
    }
    else {
        console.log("Aww man! Not even close. The random number was " + randomNumber);
    }
};

playGuessingGame(randomNumber, userGuess);
