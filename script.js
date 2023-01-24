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

//rolling dice functionality
btnRoll.addEventListener('click', function(){
//generating a random dice roll
const dice = Math.trunc(Math.random()*6) + 1
//ldisplay dice
diceEl.classList.remove('hiddem')
diceEl.src = 'dice-${dice}.png'



})
