'use strict';
// seledcting element
let player0El = document.querySelector('.player--0'); // class selector for player 0
let player1El = document.querySelector('.player--1'); // class selector for player 1
let score0El = document.querySelector('#score--0'); //id selector for player 0 score
let score1El = document.getElementById('score--1'); // we can also select an id by using getElementID . id selctor for player 1 score
let current0El = document.getElementById('current--0'); //id selector for  the current score of player 0
let current1El = document.getElementById('current--1'); // id selector for the current score of player 1

let diceEl = document.querySelector('.dice'); // class selector for the dice image
let btnNew = document.querySelector('.btn--new'); // class selctor for the new game button
let btnRoll = document.querySelector('.btn--roll'); // class selector for roll dice button
let btnHold = document.querySelector('.btn--hold'); // class selector for hold score button

// let scores;
// let currentScore;
// let activePlayer;
// let playing;

let scores, currentScore, activePlayer, playing; // initial declaration of variables

//starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0; // initial score value
  score1El.textContent = 0; // initial score value
  current0El.textContent = 0; // initial current score for player 0
  current1El.textContent = 0; // initial current score for player 1

  diceEl.classList.add('hidden'); //The classList JavaScript allows us to add, remove, replace, toggle or check whether the specified CSS class is present or not
  player0El.classList.remove('.player--winner');
  player1El.classList.remove('.player--winner');
  player0El.classList.add('.player--active');
  player1El.classList.remove('.player--active');
};

init(); //calling the starting condition

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textcontent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); //toggle() method supports adding and removing CSS classes whether they exist or not in your array with shorter lines of code
  player1El.classList.toggle('player--active');
};

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.display dice
    diceEl.classList.remove('hidden'); // it makes the dice element appear on the screen
    diceEl.src = `dice-${dice}.png`;

    //3.check for rolled 1
    if (dice !== 1) {
      //add dice to current sore
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textcontent =
        currentScore; //it displays the currentscore of the player , provided the player doesnt roll a 1.
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

//hold dice functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current scoren to active player's score

    scores[activePlayer] += currentScore; //score[1] = score[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; //this displays the sum of the player score after holding.

    // 2. check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //finish game
      playing = false; // this causes the game to stop.
      diceEl.classList.add('hidden'); // makes the dice element disspear from the screen.

      document
        .queryselector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .queryselector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

//Reset game functionality
btnNew.addEventListener('click', init);
