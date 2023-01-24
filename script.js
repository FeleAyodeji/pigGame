'use strict';
// seledcting element
const score0El = document.querySelector('#score--0')
// we can also select an id by using getElementID
const score1El = document.getElementById('score--1')
const diceEl = document.queryselector('.dice')

//starting conditions
score0El.textContent = 0
score1El.textContent = 0

diceEl.classList.add('hidden')
