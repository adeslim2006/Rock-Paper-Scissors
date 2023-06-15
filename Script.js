const content = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice();

function getComputerChoice() {
   
   return  content[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
   let ans = "";
   
   if (playerSelection === content[1] && computerSelection === content[0]) { 

      ans = `You Win! ${playerSelection} wraps ${computerSelection}`

   } else if (playerSelection === content[0] && computerSelection === content[2]) {

      ans = `You Win! ${playerSelection} breaks ${computerSelection}`

   } else if (playerSelection === content[2] && computerSelection === content[1]) {

      ans = `You Win! ${playerSelection} cuts ${computerSelection}`

   } else if (playerSelection === content[0] && computerSelection === content[1]) {

      ans = `You Lose! ${computerSelection} wraps ${playerSelection}`

   } else if (playerSelection === content[2] && computerSelection === content[0]) {
      
      ans = `You Lose! ${computerSelection} breaks ${playerSelection}`

   } else if (playerSelection === content[1] && computerSelection === content[2]) {

      ans = `You Lose! ${computerSelection} cuts ${playerSelection}`

   } else {
      ans = `A Tie! Play Again?`
   }
return ans;

};

function Game() {
   

    return console.log(playRound(playerSelection, computerSelection));
   
}

const playerScore = 0;
const computerScore = 0;

// Score tracker
function Scorecount(playerScore, computerScore) {
   
   if (playerScore == 5 || computerScore == 5) {
       if (playerScore > computerScore) {
           console.log("You Win!")
           
       } else if (playerScore < computerScore) {
         console.log("You Lose!")
   } else {
      console.log("It's a tie")
   }
}
}

Game();