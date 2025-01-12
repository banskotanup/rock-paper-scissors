
let input;
let humanScore = 0;
let computerScore = 0;
const gameWords = ["rock", "paper", "scissor"];

const result = document.querySelector("#result");
const resDes = document.querySelector("#resDes");

const disHumanScore = document.querySelector("#humanScore");
const disCompScore = document.querySelector("#computerScore");
const h_score = document.querySelector(".h_score");
const c_score = document.querySelector(".c_score");

disHumanScore.textContent = humanScore;
disCompScore.textContent = computerScore;

function setBorderColor() {
    if (humanScore > computerScore) {
        h_score.style.border = "1px solid rgb(255, 215, 0)";
        c_score.style.border = "1px solid rgb(220, 20, 60)";
    }

    if (humanScore < computerScore) {
        c_score.style.border = "1px solid rgb(255, 215, 0)";
        h_score.style.border = "1px solid rgb(220, 20, 60)";
    }

    if (humanScore === computerScore) {
        h_score.style.border = "1px solid rgb(135, 206, 235)";
        c_score.style.border = "1px solid rgb(135, 206, 235)";
    }
}

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
        result.setAttribute("style", "color: rgb(135, 206, 235);");
        resDes.textContent = `Both choose ${humanChoice} & shared 0.5 points each.`;
        resDes.setAttribute("style", "color: rgb(135, 206, 235);");
        computerScore = computerScore + 0.5;
        humanScore = humanScore + 0.5;
    }

    else if ((computerChoice === "rock" && humanChoice === "scissor") ||
        (computerChoice === "scissor" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")) {
        result.textContent = `You lose!`;
        result.setAttribute("style", "color: rgb(220, 20, 60);");
        resDes.textContent = `Computer choice ${computerChoice} beats Your choice ${humanChoice} & Computer have been credited 1 points.`;
        resDes.setAttribute("style", "color: rgb(220, 20, 60);");
        computerScore = computerScore + 1;
    }
    else {
        result.textContent = `You Won!`;
        result.setAttribute("style", "color: rgb(255, 215, 0);");
        resDes.textContent = `Computer choice ${computerChoice} lose with Your choice ${humanChoice} & You have been credited 1 points.`;
        resDes.setAttribute("style", "color: rgb(255, 215, 0);")
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
    setBorderColor();
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
        result.setAttribute("style", "color: rgb(201, 195, 195);")
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
    setBorderColor()
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
        result.setAttribute("style", "color: rgb(201, 195, 195);")
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
    setBorderColor()
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
        result.setAttribute("style", "color: rgb(201, 195, 195);")
        resDes.textContent = ``;
    }
});