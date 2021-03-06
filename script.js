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
      computerChoice = 'rock'
   }
   if (randomNumber === 2) {
      computerChoice = 'paper'
   } 
   if (randomNumber === 3) {
      computerChoice = 'scissors'
   }
   computerChoiceDisplay.textContent = computerChoice
}

function getResult () {
   if ((computerChoice === 'rock' && userChoice === 'scissors') ||
      (computerChoice === 'scissors' && userChoice === 'paper') ||
      (computerChoice === 'paper' && userChoice === 'rock')) {
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



