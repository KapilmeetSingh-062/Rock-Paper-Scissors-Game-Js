let computerScore = 0;
let playerScore = 0;
let tiedScore = 0;
let count = 0;
// let roundWinner = '';

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (computerChoice == 1) {
        return 'rock';
    }
    else if (computerChoice == 2) {
        return 'paper';
    }
    else if (computerChoice == 3) {
        return 'scissors';
    }
}

function getPlayerChoice() {
    let playerChoice = window.prompt('Enter your Play : Rock / Paper / Scissors');
    while (playerChoice == null) {
        playerChoice = window.prompt('Enter your Play : Rock / Paper / Scissors');
    }
    playerChoice = playerChoice.toLowerCase();

    let validate = validatePlayerChoice(playerChoice);
    while (validate == false) {
        playerChoice = window.prompt('Your play is Invalid! Enter your Play Again: Rock / Paper / Scissors');
        while (playerChoice == null) {
            playerChoice = window.prompt('Enter your Play : Rock / Paper / Scissors');
        }
        playerChoice = playerChoice.toLowerCase();
        validate = validatePlayerChoice(playerChoice);
    }

    return playerChoice;
}

function validatePlayerChoice(playerChoice) {
    const options = ['rock', 'paper', 'scissors'];
    if (options.includes(playerChoice)) {
        return true;
    }
    return false;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tiedScore++;
        return (`Tied! 
You both chose ${playerSelection}`);
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore++;
        return (`You Won! 
${playerSelection} beats ${computerSelection}`);
    }
    else {
        computerScore++;
        return (`You Lose!  
${computerSelection} beats ${playerSelection} `);
    }
}

function game() {
    for (count = 0; count < 5; count++) {
        console.log(`Round : ${count + 1}`);
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log(`Computer selected : ${computerSelection} | You selected : ${playerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log('Final Score : Your Score : ' + playerScore + ' | ' + ' Computer Score : ' + computerScore + ' | ' + ' Tied : ' + tiedScore);

    if (playerScore > computerScore) {
        return 'Result : You won the Game!'
    }
    else if (computerScore > playerScore) {
        return 'Result : Computer Won the Game!'
    }
    else {
        return 'Result : Game tied!'
    }

}
console.log(game());

