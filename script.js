'use strict';

let score = 20;
let highscore = 0;

function randomNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

function printMessage(message) {
  document.querySelector('.message').textContent = message;
}

function changeColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

function changeWidth(width) {
  document.querySelector('.number').style.width = width;
}

let number = randomNumber();

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    printMessage('No number!');
  } else if (guess === number) {
    printMessage('Correct number!!!');
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    changeColor('green');
    changeWidth('30rem');
  } else {
    printMessage(guess > number ? 'Too High!' : 'Too low!');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      printMessage('You lost!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  number = randomNumber();
  document.querySelector('.number').textContent = '?';
  printMessage('Start guessing ...');
  document.querySelector('.guess').value = '';
  changeColor('#333');
  changeWidth('15rem');
});
