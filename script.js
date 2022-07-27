'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);

        // when there is no input
        if (!guess) {
            displayMessage('No Number !');

        // when player wins
        } else if (guess === secretNumber) {
            displayMessage('Correct Number!');

            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = "#60b347";

            document.querySelector('.number').style.width = '30rem';

            if(score > hightscore){
                hightscore = score;
                document.querySelector('.highscore').textContent = hightscore;
            }

        // when guess is wrong
        }else if(guess !== secretNumber){
            if (score > 0) {
                // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High': 'Too Low';
                displayMessage( guess > secretNumber ? 'Too High': 'Too Low');
                score = score - 1;
                document.querySelector('.score').textContent = score;
            } else {
                console.log('jhkhk');
                displayMessage('You lost the game!');
            }
        }
    });

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';

})