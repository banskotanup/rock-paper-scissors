
let input;
let humanScore = 0;
let computerScore = 0;
const gameWords = ["rock", "paper", "scissor"];

const result = document.querySelector("#result");
const resDes = document.querySelector("#resDes");

const disHumanScore = document.querySelector("#humanScore");
const disCompScore = document.querySelector("#computerScore");
const startOver = document.querySelector(".startOver");

disHumanScore.textContent = humanScore;
disCompScore.textContent = computerScore;

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * gameWords.length);
    let computerChoice = gameWords[randNum];
    return computerChoice;
}

function getHumanChoice() {
    for (let i = 0; i < gameWords.length; i++) {
        if (input === gameWords[i]) {
            return input;
        }
    }
    return "Invalid";
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        result.textContent = `It's a tie!`;
        result.setAttribute("style", "color: orange;");
        resDes.textContent = `Both choose ${humanChoice} & shared 0.5 points each.`;
        resDes.setAttribute("style", "color: orange;");
        computerScore = computerScore + 0.5;
        humanScore = humanScore + 0.5;
    }

    else if ((computerChoice === "rock" && humanChoice === "scissor") ||
        (computerChoice === "scissor" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")) {
        result.textContent = `You lose!`;
        result.setAttribute("style", "color: red;");
        resDes.textContent = `Computer choice ${computerChoice} beats Your choice ${humanChoice} & Computer have been credited 1 points.`;
        resDes.setAttribute("style", "color: red;");
        computerScore = computerScore + 1;
    }
    else {
        result.textContent = `You Won!`;
        result.setAttribute("style", "color: green;");
        resDes.textContent = `Computer choice ${computerChoice} lose with Your choice ${humanChoice} & You have been credited 1 points.`;
        resDes.setAttribute("style", "color: green;")
        humanScore = humanScore + 1;
    }
}

const btnRock = document.querySelector(".btn-rock");
btnRock.addEventListener("click", () => {
    input = "rock";
    getHumanChoice();
    playRound();
    disHumanScore.textContent = humanScore;
    disCompScore.textContent = computerScore;
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            Swal.fire({
                allowOutsideClick: false,
                title: "Game over - YOU WIN!",
                text: `Your Score: ${humanScore} & Computer Score: ${computerScore} `,
                icon: "success"

            });
        }
        else {
            Swal.fire({
                allowOutsideClick: false,
                title: "Game over - YOU LOSE!",
                text: `Your Score: ${humanScore} & Computer Score: ${computerScore} `,
                icon: "error"
            });
        }

        humanScore = 0;
        computerScore = 0;
        disHumanScore.textContent = humanScore;
        disCompScore.textContent = computerScore;
        result.textContent = `Game Starts!!!`;
        result.setAttribute("style", "color: black;")
        resDes.textContent = ``;
    }
});

const btnPaper = document.querySelector(".btn-paper");
btnPaper.addEventListener("click", () => {
    input = "paper";
    getHumanChoice();
    playRound();
    disHumanScore.textContent = humanScore;
    disCompScore.textContent = computerScore;
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            Swal.fire({
                allowOutsideClick: false,
                title: "Game over - YOU WIN!",
                text: `Your Score: ${humanScore} & Computer Score: ${computerScore} `,
                icon: "success"
            });
        }
        else {
            Swal.fire({
                allowOutsideClick: false,
                title: "Game over - YOU LOSE!",
                text: `Your Score: ${humanScore} & Computer Score: ${computerScore} `,
                icon: "error"
            });
        }
        humanScore = 0;
        computerScore = 0;
        disHumanScore.textContent = humanScore;
        disCompScore.textContent = computerScore;
        result.textContent = `Game Starts!!!`;
        result.setAttribute("style", "color: black;")
        resDes.textContent = ``;
    }
});

const btnScissor = document.querySelector(".btn-scissor")
btnScissor.addEventListener("click", () => {
    input = "scissor";
    getHumanChoice();
    playRound();
    disHumanScore.textContent = humanScore;
    disCompScore.textContent = computerScore;
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            Swal.fire({
                allowOutsideClick: false,
                title: "Game over - YOU WIN!",
                text: `Your Score: ${humanScore} & Computer Score: ${computerScore} `,
                icon: "success"
            });
        }
        else {
            Swal.fire({
                allowOutsideClick: false,
                title: "Game over - YOU LOSE!",
                text: `Your Score: ${humanScore} & Computer Score: ${computerScore} `,
                icon: "error"
            });
        }
        humanScore = 0;
        computerScore = 0;
        disHumanScore.textContent = humanScore;
        disCompScore.textContent = computerScore;
        result.textContent = `Game Starts!!!`;
        result.setAttribute("style", "color: black;")
        resDes.textContent = ``;
    }
});



