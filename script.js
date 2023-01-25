'use strict';
// seledcting element
const score0El = document.querySelector('#score--0')
// we can also select an id by using getElementID
const score1El = document.getElementById('score--1')
const diceEl = document.queryselector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnOld = document.querySelector('.btn--old')

//starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

let currentScore = 0

//rolling dice functionality
btnRoll.addEventListener('click', function(){

// 1.generating a random dice roll
const dice = Math.trunc(Math.random()*6) + 1

//2.display dice
diceEl.classList.remove('hidden')
diceEl.src = 'dice-${dice}.png'

//3.check for rolled 1 
if(dice !== 1){
//add dice to current sore
currentScore += dice

} 
else{
// switch to next player

}




})
