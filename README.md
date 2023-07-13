Rock, paper scissors task as part of the Odin Project. 

My first attempt at a project in javascript. 

Skills:
Break a larger task into small tasks, using pseudocode
Apply foundational learning using, for example: functions, variables, if/else statements, console.log, math.random...
Learn how to use for loops
Use resources online to help solve problems

Reflections:
The game only plays 5 rounds, even if the user makes an error entering their play. I will come back and fix this bug when I have the knowledge to do so.

Pseudocode:
Make the computer select either Rock, Paper or Scissors randomly using math.floor and math.random DONE
Create variables for player and computer to select rock paper or scissors DONE
Prompt user to enter their play and make this case insensitive. DONE
Specify the possible outcomes for each round of the game. DONE
     return result of each outcome in a string. DONE
     create counter for each round: win, lose or tie. DONE
Log the results for each round DONE
Create a for loop so that you play five rounds of the game DONE
At the end of five rounds, report back the overall winner. DONE

-----

TASK INSTRUCTIONS
- Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
- Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a - string that declares the winner of the round like so: "You Lose! Paper beats Rock"
- Make your function’s playerSelection parameter case-insensitive
    - Important note: you want to return the results of this function call, not console.log() them. 
- Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
- You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more    learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
- At this point you should be using console.log() to display the results of each round and the winner at the end.
- Use prompt() to get input from the user. 
