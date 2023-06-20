function Game() {

   const options = ["rock", "paper", "scissors"];

   
   let rounds = 0;
   let playerScore = 0;
   let computerScore = 0;

function playRound(playerSelection, computerSelection) {
   let ans = "";


    playerSelection = prompt("Rock! Paper! Scissors!").toLowerCase();
    computerSelection = options[Math.floor(Math.random()*3)];
   
   if (playerSelection === options[1] && computerSelection === options[0]) { 

      ans = `You Win! ${playerSelection} wraps ${computerSelection}` 
       playerScore++;
       rounds++;
       

   } else if (playerSelection === options[0] && computerSelection === options[2]) {

      ans = `You Win! ${playerSelection} breaks ${computerSelection}`
       playerScore++;
       rounds++;
       

   } else if (playerSelection === options[2] && computerSelection === options[1]) {

      ans = `You Win! ${playerSelection} cuts ${computerSelection}`
      playerScore++;
      rounds++;
      

   } else if (playerSelection === options[0] && computerSelection === options[1]) {

      ans = `You Lose! ${computerSelection} wraps ${playerSelection}`
      computerScore++;
      rounds++;
      

   } else if (playerSelection === options[2] && computerSelection === options[0]) {
      
      ans = `You Lose! ${computerSelection} breaks ${playerSelection}`
      computerScore++;
      rounds++;
      

   } else if (playerSelection === options[1] && computerSelection === options[2]) {

      ans = `You Lose! ${computerSelection} cuts ${playerSelection}`
      computerScore++;
      rounds++;
      

   } else {
      ans = `A Tie! Play Again?`
      rounds++;
      
   } 

   console.log(ans)

   if (rounds === 1) { 
      console.log(`${rounds} round played`)
    } else {
      console.log(`${rounds} rounds played`)
    }
    
    

    scoreCount(playerScore, computerScore);
   




return {playerScore, computerScore};
};

let scores = playRound();

let newPlayerScore = scores.playerScore;
let newComputerScore = scores.computerScore;


    for (let i = 0; i < 4; i++) {
      if(rounds < 6) {
         playRound();
      } 
      
      
    }

          // Score tracker
function scoreCount() {

   if (rounds === 5) {
       if (playerScore > computerScore) {
           console.log(`Full Time Score: PlayerScore is ${playerScore}  ComputerScore is ${computerScore}`)
           console.log("You Win!")
           
       } else if (playerScore < computerScore) {
         console.log(`Full Time Score: PlayerScore is ${playerScore}  ComputerScore is ${computerScore}`)
         console.log("You Lose!")
   } else if (playerScore === computerScore) {
      console.log(`Full Time Score: PlayerScore is ${playerScore}  ComputerScore is ${computerScore}`)
      console.log("It's a tie")
   } 
 }
 
 }
   
}




Game();