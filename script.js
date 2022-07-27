'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;




document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // when there is no input
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number !.';

        // when player wins
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number!';

            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = "#60b347";

            document.querySelector('.number').style.width = '30rem';

            if(score > hightscore){
                hightscore = score;
                document.querySelector('.highscore').textContent = hightscore;
            }

        // when guess is high
        } else if (guess > secretNumber) {
            if (score > 0) {
                document.querySelector('.message').textContent = 'Too High';
                score = score - 1;
                document.querySelector('.score').textContent = score;
            } else {
                console.log('jhkhk');
                document.querySelector('.message').textContent = 'You lost the game!';
            }

        //when guess is low
        } else if (guess < secretNumber) {
            if(score > 0 ){
            document.querySelector('.message').textContent = 'Too Low';
            score = score - 1;
            document.querySelector('.score').textContent = score;
            }else {
                document.querySelector('.message').textContent = 'You lost the game!';
            }
        }
    });

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';

})