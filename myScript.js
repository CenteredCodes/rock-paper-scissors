let choices = ['rock', 'paper', 'scissors'];
var computerSelection = 0;

function getComputerChoice() {

    var randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
};



/* we change the user input using toLowerCase() */


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie! You both chose " + computerSelection
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Lose! Paper Beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Rock"
    } else  { 
        return "UNVALID ENTRY"
    }
};

let entry = ("Pick One: Rock, Paper, Scissors");
var playerSelection = "rock" ;
console.log("You chose " + playerSelection)
computerSelection = getComputerChoice();
console.log("The opponent chose " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

document.querySelector('h1').innerText = String(playRound(playerSelection, computerSelection))
