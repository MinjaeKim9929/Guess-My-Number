'use strict';

// random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// When Check! button is clicked
document.querySelector('.check').addEventListener('click', function () {
  // user's guess
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    // display the secret number
    document.querySelector('.number').textContent = secretNumber;
    // change the background color of the page
    document.querySelector('body').style.backgroundColor = '#60b347';
    // change the width of the number box
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      // decrease the score
      score--;
      // display the decreased score
      document.querySelector('.score').textContent = score;
      // when there is no more chance to guess
    } else {
      displayMessage('💥 You lost the game!');
      // display 0
      document.querySelector('.score').textContent = 0;
    }
  }
});

// When Again! button is clicked
document.querySelector('.again').addEventListener('click', function () {
  // reset the score
  score = 20;
  document.querySelector('.score').textContent = score;
  // reset the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // reset the message input field
  displayMessage('Start guessing!');
  // reset the number box
  document.querySelector('.number').textContent = '?';
  // reset the guess input field
  document.querySelector('.guess').value = '';
  // reset the background color
  document.querySelector('body').style.backgroundColor = '#222';
  // reset the width of the number box
  document.querySelector('.number').style.width = '15rem';
});
