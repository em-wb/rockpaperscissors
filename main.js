// Make the computer randomly select rock, paper or scissors 
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomPick = options[Math.floor(Math.random() * options.length)];
    return randomPick;
  }

// Add variables for counting score
let playerScore = 0
let computerScore = 0
let tieScore = 0 
let count = 0
let rounds = 5

// Create game. Specify rules and display outcomes.

function game() {
    const computerSelection = getComputerChoice();  
    function playRound(playerSelection, computerSelection) {
            if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++
                //return ("Rock blunts scissors, you win!")
                textResult.textContent = "Yaaas, rock blunts scissors."
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore++
                //return ("Paper wraps rock, you lose!")
                textResult.textContent = "Soz babe, paper wraps rock."
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                computerScore++
                // return ("Scissors cut paper, you lose!") 
                textResult.textContent = "Awww no, scissors cut paper."
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++
                // return ("Paper wraps rock, you win!")   
                textResult.textContent = "Oi oi, paper wraps rock."
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                computerScore++   
                //return ("Rock blunts scissors, you lose!")
                textResult.textContent = "Oh snap, rock blunts scissors."
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++ 
                //return ("Scissors cut paper, you win!")
                textResult.textContent = "Looking sharp, scissors cut paper."
            } else if (playerSelection === computerSelection) {
                tieScore++;
                //return ("It's a draw!")    
                textResult.textContent = "No drama, it's a draw."
            }
    }
    console.log(playRound(playerSelection, computerSelection))
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;    
    displayComputerSelection.textContent = ["The bot chose: " + computerSelection];  
}

// Restart game
const restarts = document.querySelector("#restarts");

restarts.addEventListener("click", (e) => {
    count = 0;
    playerScore=0;
    computerScore=0;
    endGameResult.textContent = "";
    displayComputerSelection.textContent = "";
    displayPlayerScore.textContent = "";
    displayComputerScore.textContent = ""; 
    textResult.textContent = ""; 
})



//Add event listener for button selection and commence gameplay for 5 rounds

const possibleChoices = document.querySelectorAll("#buttonsContainer");
let playerSelection;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    count ++
    if (count<rounds) {
        game() }
    else {
        endGame()}
        
}))

//Display winner of the 5 rounds
function endGame() {
    if (playerScore<computerScore) endGameResult.textContent = "After 5 rounds, the winner is... The bot :(";
    if (playerScore>computerScore) endGameResult.textContent = "After 5 rounds, the winner is... You!";
    else if (playerScore===computerScore) endGameResult.textContent = "After 5 rounds, the winner is... No one, it's a draw"
}


//Add divs to display results

const buttonsContainer = document.querySelector('#buttonsContainer');
const resultsContainer = document.querySelector('#resultsContainer');
const textResult = document.querySelector('#textResult');
const yourScore = document.querySelector('#yourScore');
const botScore = document.querySelector('#botScore');
const botChoice = document.querySelector('#botChoice');
const endGameContainer = document.querySelector("#endGameContainer");


const displayPlayerScore = document.createElement('div');
displayPlayerScore.classList.add('displayPlayerScore');
displayPlayerScore.textContent = playerScore;
yourScore.append(displayPlayerScore);

const displayComputerScore = document.createElement('div');
displayComputerScore.classList.add('displayComputerScore');
displayComputerScore.textContent = computerScore;
botScore.append(displayComputerScore);

const displayComputerSelection = document.createElement('div');
displayComputerSelection.textContent = "";
botChoice.append(displayComputerSelection);

const endGameResult = document.createElement('div');
endGameResult.textContent = "";
endGameContainer.append(endGameResult);
