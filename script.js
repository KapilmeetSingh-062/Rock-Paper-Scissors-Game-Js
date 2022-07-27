let computerScore = 0;
let playerScore = 0;
let tiedScore = 0;
const outcomeDiv = document.querySelector('.outcome');
const refreshBtnArea = document.querySelector('.refresh');
const buttons = document.querySelectorAll('button');

const p = document.createElement('p')

function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
    const refreshBtn = document.createElement('button');
    refreshBtn.innerText = 'Play Again!';
    refreshBtnArea.appendChild(refreshBtn);

    refreshBtn.addEventListener('click', () => {
        refreshPage();
    })
}

function refreshPage() {
    window.location.reload();
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        tiedScore++;

        outcome = `Tied! You both chose ${playerSelection}
        
        PlayerScore : ${playerScore} 
        ComputerScore : ${computerScore} 
        
        `;

    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore++;

        outcome = `You Won! ${playerSelection} beats ${computerSelection}

        PlayerScore : ${playerScore} 
        ComputerScore : ${computerScore}
        
        `;

        if (playerScore == 5) {
            disableButtons();
            outcome += `You Won the Game! 
            Want to play again?`;
        }

    }
    else {
        computerScore++;

        outcome = `You Lose! ${computerSelection} beats ${playerSelection}

        PlayerScore : ${playerScore} 
        ComputerScore : ${computerScore}
        
        `;

        if (computerScore == 5) {
            disableButtons();
            outcome += `You Lost the Game!
            Want to play again?`;
        }
    }
    p.innerText = outcome;
    outcomeDiv.appendChild(p);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = `${button.className}`;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })
});

