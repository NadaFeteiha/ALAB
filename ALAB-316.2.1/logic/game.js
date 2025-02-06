
const allowedGuesses = 5;
const maxNumber = 100;
const minNumber = 1;

let userGuesses = [];
let currentAllowGuesses = allowedGuesses;
let luckyNumber = getRandomNumber(minNumber, maxNumber);

export function setGuess(guess) {
    let message = "";
    let start = minNumber - 1;
    let end = maxNumber;

    currentAllowGuesses--;
    userGuesses.push(guess);

    if (guess === luckyNumber) {
        start = luckyNumber;
        end = luckyNumber;
        message = "Congratulations! You won!";
    } else if (guess < luckyNumber) {
        end = guess;
        message = "Try higher!";
    } else if (guess > luckyNumber) {
        start = guess;
        message = "Try lower!";
    }
    return {
        start,
        end,
        message,
    }
}

export function getPreviousGuesses() {
    return userGuesses;
}

export function getCurrentAllowGuesses() {
    return currentAllowGuesses;
}


export function resetGame() {
    userGuesses = [];
    currentAllowGuesses = allowedGuesses;
    luckyNumber = getRandomNumber(minNumber, maxNumber);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkGuess(guess) {
    if (isNaN(guess)) {
        throw new Error("Please enter a valid number.");
    }

    const intGuess = parseInt(guess);

    if (intGuess < minNumber || intGuess > maxNumber) {
        throw new Error(`Please enter a number between ${minNumber} and ${maxNumber}.`);
    }

    return intGuess;
}