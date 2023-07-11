//Make the computer select either Rock, Paper or Scissors randomly

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
  }

  console.log (getComputerChoice())

