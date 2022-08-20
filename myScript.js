
var result = ""

let choices = ['rock', 'paper', 'scissors'];
var computerSelection = "";

function getComputerChoice() {
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
};
computerSelection = getComputerChoice();
console.log(computerSelection)


const btn1 = document.querySelector('#button1')
btn1.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    result = playRound(playerSelection ="rock", computerSelection);
    console.log(result)
    scoreBoard();
    computerSelection = getComputerChoice();

})

const btn2 = document.querySelector('#button2')
btn2.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = "paper" ;
    result = playRound(playerSelection, computerSelection)
    scoreBoard();
    computerSelection = getComputerChoice();
})

const btn3 = document.querySelector('#button3')
btn3.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = "scissors" ;
    result = playRound(playerSelection, computerSelection)
    scoreBoard();
    computerSelection = getComputerChoice();
})

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
let myPoints = 0 ;
let opponentPoints = 0;



function scoreBoard() {
    if (result.includes("Win")) {
        myPoints++
        document.querySelector('#demo').textContent = `Player: ${myPoints}   Computer:${opponentPoints}`;
        resetScoreBoard()
        
    } else if (result.includes("Lose")) {
        opponentPoints++
        document.querySelector('#demo').textContent = `Player: ${myPoints}   Computer:${opponentPoints}`;
        resetScoreBoard()
    }
};

function resetScoreBoard() { 
    setTimeout( () => { 
    if (myPoints === 5) {
        myPoints = 0;
        opponentPoints = 0;
        window.alert("YOU WIN!")
        document.querySelector('#demo').textContent = `Player: ${myPoints}   Computer:${opponentPoints}`
    } else if (opponentPoints === 5) {
        myPoints = 0;
        opponentPoints = 0;
        window.alert("YOU LOSE!")
        document.querySelector('#demo').textContent = `Player: ${myPoints}   Computer:${opponentPoints}`;
    }
} 
), 1000}






/*
function game() {

  let table = []; 
    for (let i = 0; i < 5; i++) {
            
        let outcome = playRound(playerSelection, computerSelection)
            console.log(computerSelection)
             table.push(outcome);
    }

    console.log(table);
};

game();     
*/