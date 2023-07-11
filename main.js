// Make the computer select either Rock, Paper or Scissors randomly

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomPick = options[Math.floor(Math.random() * options.length)];
    return randomPick;
  }

// Make variables for player and computer selection

const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = "scissors";

// Specify game scenarios 

  function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            return ("Rock blunts scissors, you win!")
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return ("Paper wraps rock, you lose!")
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return ("Scissors cut paper, you lose!")
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return ("Paper wraps rock, you win!")
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return ("Rock blunts scissors, you lose!")   
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return ("Scissors cut paper, you win!") 
        } else if (playerSelection === computerSelection) {
            return ("It's a draw!")
        }
    }
       
      console.log (playRound(playerSelection, computerSelection));