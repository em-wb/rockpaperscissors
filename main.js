// Make the computer select either Rock, Paper or Scissors randomly

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomPick = options[Math.floor(Math.random() * options.length)];
    return randomPick;
  }


// Make variables for player and computer selection

const computerSelection = getComputerChoice();
    console.log(computerSelection);
const playerSelection = "Scissors";
const rounds = 4;


//UPDATE: make variables for counting score 

const playerScore = 0
const computerScore = 0
const tieScore = 0 


// Specify game scenarios // UPDATE: make lower case // UPDATE: add prompt for user

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What do you choose? Rock, paper or scissors!") 
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
            return ("Rock blunts scissors, you win!")
            
        } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
            return ("Paper wraps rock, you lose!")
            
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
            return ("Scissors cut paper, you lose!")
            
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            return ("Paper wraps rock, you win!")
            
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
            return ("Rock blunts scissors, you lose!")   
           
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
            return ("Scissors cut paper, you win!") 
           
        } else if (playerSelection.toLowerCase() === computerSelection) {
            return ("It's a draw!")
            
        }
}

console.log(playRound(playerSelection, computerSelection));

// UPDATE: write a function that counts 5 rounds (at the moment return message doesn't update)

for (let i = 0; i < rounds; i++) {
    playRound() 
}


//UPDATE add view for counter  (at the moment, counting not set up)

console.log(playerScore, computerScore, tieScore)





    

  