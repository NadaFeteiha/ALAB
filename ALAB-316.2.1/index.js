//Part 1: Requirements
// You will create a simple guessing game. Using window methods, 
// you will give and receive information from the user in order to 
// direct them toward the correct answer in a limited number of guesses.


// Here is a list of requirements for easy reference:
// Create a simple guessing game that pushes users toward the correct answer in some iterative way.
// The game does not need to be practical or complicated.
// Use window object methods to gather input from the user and display information to the user.
// Use DOM manipulation to give a visual indication of the game's progress in some way.

const allowedGuesses = 5;
const maxNumber = 100;
const minNumber = 1;
let userGuesses = [];

function guessGame() {
    const theWonderfulNumber = 7;
    let allowNumOfGuesses = allowedGuesses;
    userGuesses = [];

    window.alert(`Welcome to the Guessing Game! You have ${allowedGuesses} guesses to guess the correct number between ${minNumber} and ${maxNumber}.`);
    try {
        let guess = prompt(`Guess number between ${minNumber} and ${maxNumber}`);
        let intGuess = checkGuess(guess);

        while (intGuess !== theWonderfulNumber && allowNumOfGuesses > 1) {
            let message = "You have " + allowNumOfGuesses + " guess left.";

            userGuesses.push(intGuess);

            message += "\nPrevious guesses: " + userGuesses.join(", ");

            if (intGuess > theWonderfulNumber) {
                guess = prompt(`Too high. Guess again. \n${message}`);
            } else {
                guess = prompt(`Too low. Guess again.\n${message}`);
            }

            intGuess = checkGuess(guess);
            allowNumOfGuesses--;
        }

        if (intGuess === theWonderfulNumber) {
            window.alert("Congratulations! You guessed the correct number!");
        } else {
            window.alert("Sorry, you are out of guesses. The correct number was " + theWonderfulNumber);
        }

    } catch (error) {
        window.alert(`Error: ${error.message}`);
    } finally {
        playAgain();
    }
}

// helper functions
function playAgain() {
    let play = confirm("Do you want to play again?");
    if (play) {
        guessGame();
    } else {
        window.alert("Thanks for playing!");
    }
}

function checkGuess(guess) {
    if (guess === null || guess === "" || isNaN(guess) || typeof guess === Number) {
        throw new Error(`Error not correct ${guess}`);
    } else if (guess < minNumber || guess > maxNumber) {
        throw new Error(`Number should be between ${minNumber} and ${maxNumber}`);
    } else {
        return parseInt(guess);
    }
}

function drawTheBoard() {
    const h6 = document.createElement("h6");
    h6.innerText = `your guesses : ${userGuesses}`;
    if (userGuesses.length > 0) {
        app.appendChild(h6);
    }

    let board = document.createElement("table");
    board.style.border = "1px solid black";

    let cell = document.createElement("td");

    for (let i = 0; i < 10; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement("td");

            cell.innerText = i * 10 + j + 1;
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    app.appendChild(board);
    guessGame();
}

function init(){
    drawTheBoard();
}

//********  UI part ********
const app = document.getElementById("app");
app.parentNode.style.backgroundColor = "lightblue";

const h1 = document.createElement("h1");
h1.innerText = "Welcome in Guessing Game!";
app.appendChild(h1);


const button = document.createElement("button");
button.innerText = "Start Game";
button.style.backgroundColor = "blue";
button.style.color = "white";
app.appendChild(button);

button.addEventListener("click", init);