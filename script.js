const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let scoreTally = document.querySelector('p')
let userChoice 
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoices()
   getResult()
}))

function generateComputerChoices () {
   const randomNumber = Math.floor(Math.random() * possibleChoices.length ) +1

   if (randomNumber === 1) {
      computerChoice = 'ROCK'
   }
   if (randomNumber === 2) {
      computerChoice = 'PAPER'
   } 
   if (randomNumber === 3) {
      computerChoice = 'SCISSORS'
   }
   computerChoiceDisplay.textContent = computerChoice
}

function getResult () {
   if ((computerChoice === 'ROCK' && userChoice === 'SCISSORS') ||
      (computerChoice === 'SCISSORS' && userChoice === 'PAPER') ||
      (computerChoice === 'PAPER' && userChoice === 'ROCK')) {
         result = 'You lost that one'
} 
   else if (computerChoice === userChoice) {
   result = 'Its a tie !!'
}
   else {
   result = 'YOU WON !!!' 
}
resultDisplay.innerHTML = result
};


function restart () {
   location.reload();
   return false;
}

