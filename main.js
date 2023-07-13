// Make the computer select either Rock, Paper or Scissors randomly 

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomPick = options[Math.floor(Math.random() * options.length)];
    return randomPick;
  }


// Make variables for player and computer selection

const computerSelection = getComputerChoice();
const playerSelection = "Scissors";
const rounds = 5;


//Variables for counting score //UPDATE from const to let

let playerScore = 0
let computerScore = 0
let tieScore = 0 


// Specify game scenarios, prompt user to make their selection and make their choice case insensitive

function game() {
    
    function playRound(playerSelection, computerSelection) {
        playerSelection = prompt("What do you choose? Rock, paper or scissors!") 
            if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
                playerScore++
                return ("Rock blunts scissors, you win!")  
            } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
                computerScore++
                return ("Paper wraps rock, you lose!")
            } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
                computerScore++
                return ("Scissors cut paper, you lose!")   
            } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
                playerScore++
                return ("Paper wraps rock, you win!")   
            } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
                computerScore++   
                return ("Rock blunts scissors, you lose!")
            } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
                playerScore++ 
                return ("Scissors cut paper, you win!")
            } else if (playerSelection.toLowerCase() === computerSelection) {
                tieScore++
                return ("It's a draw!")    
            }
        
    }
    console.log("The computer chose " + computerSelection,"-", playRound(playerSelection, computerSelection)); // UPDATE move here and add computer choice
    console.log("You've won: ", playerScore, ", lost: ", computerScore, ", tied: ", tieScore); // // add view for counter // UPDATE move counter here, add strings 

}

// write a function that counts 5 playRounds 
for (let i = 0; i < rounds; i++) {
    game() }  // UPDATE changed this from playRound to game





    

  