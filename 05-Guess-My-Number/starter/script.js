'use strict';

/*
console.log(document.querySelector('.message').textContent);



document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value;
document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

function setTextContent(selector, content) {
    document.querySelector(selector).textContent = content;
}

function decreaseScore() {
    score--;
    setTextContent('.score', score);
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //When no input
    if (!guess) {
        setTextContent('.message', 'No Number!');

        //When guess is correct
    } else if (guess === secretNumber) {
        setTextContent('.number', secretNumber);//document.querySelector('.number').textContent = secretNumber;
        setTextContent('.message', '🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            setTextContent('.highscore', highScore);
        }

        //When guess is incorrect
    } else if (score > 0) {
        if (guess > secretNumber) {
            setTextContent('.message', 'Too High');
            decreaseScore();
        } else if (guess < secretNumber) {
            setTextContent('.message', 'Too Low');
            decreaseScore();
        }
    } else if (score == 0) {
        setTextContent('.message', 'GAME OVER');
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    setTextContent('.message', 'Start guessing...');
    setTextContent('.score', score);
    setTextContent('.number', '?');
    setTextContent('.guess', '');

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});