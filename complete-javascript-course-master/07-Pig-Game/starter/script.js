'use strict';

const btnNew = document.querySelector('.btn--new');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const btnRoll = document.querySelector('.btn--roll');
const sections = document.querySelectorAll('section');
const section0 = document.querySelector('section');
const section1 = sections[1];
const hold = document.querySelector('.btn--hold');

const switchPlayer = function() {
    if (section0.classList.contains('player--active')) {
        section0.classList.remove('player--active');
        section1.classList.add('player--active');
    } else {
        section1.classList.remove('player--active');
        section0.classList.add('player--active');
    };
};

const addScore0 = function() {
    let current0Value = Number(current0.textContent) || 0;
    let score0Value = Number(score0.textContent) || 0;
    
    score0.textContent = current0Value + score0Value;
};

const addScore1 = function() {
    let current1Value = Number(current1.textContent) || 0;
    let score1Value = Number(score1.textContent) || 0;
    
    score1.textContent = current1Value + score1Value;
};

btnNew.addEventListener('click', function() {
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    section0.classList.add('player--active');
    section1.classList.remove('player--active');
});

const rollDice = function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);

    if (section0.classList.contains('player--active') && randomNumber !== 1) {
        current0.textContent = Number(current0.textContent) + randomNumber; // Update player 0's current score
    } else if (randomNumber === 1) {
        current0.textContent = 0; // Reset player 0's current score
        switchPlayer(); // Switch to player 1
    }

    if (section1.classList.contains('player--active') && randomNumber !== 1) {
        current1.textContent = Number(current1.textContent) + randomNumber; // Update player 1's current score
    } else if (randomNumber === 1) {
        current1.textContent = 0; // Reset player 1's current score
        switchPlayer(); // Switch to player 0
    }
};

btnRoll.addEventListener('click', rollDice);



hold.addEventListener('click', function() {
    if (section0.classList.contains('player--active')) {
        addScore0();
        switchPlayer();
    } else {
        addScore1();
        switchPlayer();
    }
});


