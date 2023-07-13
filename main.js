// Make the computer select either Rock, Paper or Scissors randomly 
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomPick = options[Math.floor(Math.random() * options.length)];
    return randomPick;
  }

// Add variables for player selection, number of rounds
const playerSelection = "Scissors";
const rounds = 5;

// Add variables for counting score
let playerScore = 0
let computerScore = 0
let tieScore = 0 


// Specify game scenarios, prompt user to make their selection and make their choice case insensitive
function game() {
    const computerSelection = getComputerChoice();  
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
            } else {alert("Try again, by entering: rock, paper or scissors.") } // This needs to not count as part of the 5 rounds, come back and fix this when I know more!
        
    }
    console.log("The computer chose " + computerSelection,"-", playRound(playerSelection, computerSelection)); // view game outcome
    console.log("You've won: ", playerScore, ", lost: ", computerScore, ", tied: ", tieScore); // view score counter 
}

// A for loop that counts 5 playRounds 
for (let i = 0; i < rounds; i++) {
    game() } 

// Report the overall winner of the game
function gameOutcome(playerScore, computerScore) {
    if (playerScore < computerScore) {
        return ("After 5 rounds, you lose! Better luck next time.")
    } else if (playerScore > computerScore) {
        return ("After 5 rounds, you are the overall winner! Congratulations.")
    } else {return ("After 5 rounds, it's a draw!")}
    }

    console.log (gameOutcome(playerScore, computerScore))

    


    

  