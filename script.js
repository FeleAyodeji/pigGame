'use strict';
// seledcting element
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1') // we can also select an id by using getElementID
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.queryselector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

//starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden') //The classList JavaScript allows us to add, remove, replace, toggle or check whether the specified CSS class is present or not

const scores = [0,0]
let currentScore = 0
let activePlayer = 0

const switchPlayer = function(){
document.getElementById(`current--${activePlayer}`).textcontent = 0
activePlayer = activePlayer === 0 ? 1 : 0
player0El.classList.toggle('player--active') //toggle() method supports adding and removing CSS classes whether they exist or not in your array with shorter lines of code
player1El.classList.toggle('player--active')
}

//rolling dice functionality
btnRoll.addEventListener('click', function(){
// 1.generating a random dice roll
const dice = Math.trunc(Math.random()*6) + 1
//2.display dice
diceEl.classList.remove('hidden')
diceEl.src = `dice-${dice}.png`
//3.check for rolled 1 
if(dice !== 1){
//add dice to current sore
 currentScore += dice
 document.getElementById(`current--${activePlayer}`).textcontent = currentScore
 }  else{
 // switch to next player
 switchPlayer()
 }
})

//hold dice functionality
btnHold.addEventListener('click' , function(){
// 1. add current scoren to active player's score
//score[1] = score[1] + currentScore
score[activePlayer] += currentScore
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer
]





// 2. checck if player's score is >= 100

//finish game

//switch to the next player
switchPlayer()
})


