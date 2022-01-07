'use strict';
//generating secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let highScore = 0; //setting high score to 0 at first
let score = 20;
//using function to display message and avoid dry principle
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
/*  handeling the click event while we click in the button */
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage('Not A NUmber!!');
  } //when the generated number matches with the user input number
  else if (guess == secretNumber) {
    displayMessage('correct NUMBER!! ');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } //when the user guessed number doesn't match with generatednumber and we need to give the hint to the user
  else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'too high' : 'too lowww');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('YOU LOSE THE GAME !');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
