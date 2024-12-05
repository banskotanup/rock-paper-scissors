let roundsToPlay = prompt("Enter how many rounds do you want to play?", 0);

let humanScore = 0;
let computerScore = 0;

const gameWords = ["rock", "paper", "scissor"];
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * gameWords.length);
    let computerChoice = gameWords[randNum];
    return computerChoice;
}

function getHumanChoice() {
    let input = prompt("Enter rock or paper or scissor!").toLowerCase();
    for (let i = 0; i < gameWords.length; i++){
        if (input === gameWords[i]) {
            return input;
        }
    }
    return "Invalid";
}


function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    
    if (humanChoice === "Invalid") {
        alert("Sorry! You lose because of invalid input.")
        computerScore = computerScore + 1;
    }
    else if (humanChoice === computerChoice) {
        alert(`It's a tie! Both choose ${humanChoice} & shared 0.5 points each.`);
        computerScore = computerScore + 0.5;
        humanScore = humanScore + 0.5;
    }

    else if ((computerChoice === "rock" && humanChoice === "scissor") ||
        (computerChoice === "scissor" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice ==="rock")) {
        alert(`You lose! Computer choice ${computerChoice} beats Your choice ${humanChoice} & Computer have been credited 1 points.`)
        computerScore = computerScore + 1;
    }
    else {
        alert(`You Won! Computer choice ${computerChoice} lose with Your choice ${humanChoice} & You have been credited 1 points.`)
        humanScore = humanScore + 1;
    }
}

function playGame() {
    for (let i = 0; i < roundsToPlay; i++){
        alert(`Game Starts! Human Score: ${humanScore} & Computer Score: ${computerScore}`);
        playRound();
    }
}

function finalResult() {
    if (humanScore > computerScore) {
        alert(`You Won!!! Your Score: ${humanScore} & Computer Score: ${computerScore}.`) 
    }
    else if (humanScore < computerScore) {
        alert(`You Lose!!! Your Score: ${humanScore} & Computer Score: ${computerScore}.`) 
    }
    else {
        alert(`Tie!!! Your Score: ${humanScore} & Computer Score: ${computerScore}.`) 
    }
}

playGame();
finalResult();