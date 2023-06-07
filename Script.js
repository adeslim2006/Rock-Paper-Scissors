const content = ["rock", "paper", "scissors"];
let playerSelection = prompt("Rock, Paper, Scissors?!").toLocaleLowerCase();

function getComputerChoice() {
   
   return  content[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
   let ans = "";
      
   if (playerSelection === content[1] && computerSelection === content[0]) {

      ans = `You Win! ${playerSelection} beats ${computerSelection}`

   } else if (playerSelection === content[0] && computerSelection === content[2]) {

      ans = `You Win! ${playerSelection} beats ${computerSelection}`

   } else if (playerSelection === content[2] && computerSelection === content[1]) {
      
      ans = `You Win! ${playerSelection} beats ${computerSelection}`

   } else if (playerSelection === content[0] && computerSelection === content[1]) {

      ans = `You Lose! ${computerSelection} beats ${playerSelection}`

   } else if (playerSelection === content[2] && computerSelection === content[0]) {
      
      ans = `You Lose! ${computerSelection} beats ${playerSelection}`

   } else if (playerSelection === content[1] && computerSelection === content[2]) {

      ans = `You Lose! ${computerSelection} beats ${playerSelection}`

   } else {
      ans = `Tie! Play Again?`
   }
   

return ans;
};



const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));