import { setGuess, resetGame, getPreviousGuesses, getCurrentAllowGuesses } from "./game.js";

const app = document.getElementById("app");
let board = document.createElement("table");
const startButton = document.createElement("button");
const addInput = document.createElement("button");

const input = document.createElement("input");

const previousGausses = document.createElement("h3");
const message = document.createElement("h3");
const numOfReminderGuesses = document.createElement("h4");

export default function displayGame() {
    app.parentNode.style.backgroundColor = "lightblue";

    const h1 = document.createElement("h1");
    h1.innerText = "Welcome in Guessing Game!";
    app.appendChild(h1);
    console.log("Displaying the game");


    app.style.display = "flex";
    app.style.flexDirection = "column";
    app.style.justifyContent = "center";
    app.style.alignItems = "center";
    previousGausses.innerText = `Previous guesses`;
    app.appendChild(previousGausses);

    // message to display 
    app.appendChild(message);

    numOfReminderGuesses.innerText = `Number of remaining guesses: ${5}`;
    numOfReminderGuesses.style.margin = "10px";
    numOfReminderGuesses.style.color = "blue";
    numOfReminderGuesses.style.fontWeight = "bold";
    numOfReminderGuesses.style.fontSize = "20px";
    app.appendChild(numOfReminderGuesses);

    // div to display  
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "row";
    div.style.gap = "10px";
    div.style.margin = "10px";
    app.appendChild(div);

    // get input from user
    input.type = "number";
    input.placeholder = "Enter your guess";
    div.appendChild(input);


    // button to start the game
    startButton.innerText = "Play";
    div.appendChild(startButton);

    addInput.innerText = "Enter";
    div.appendChild(addInput);

    drawTheBoard();
}

function drawTheBoard() {
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

}

function displayTime() {
    setInterval(() => {
        h6.innerText = `Time left: ${time}`;
        time--;
    }, 1000);
}

function colorCells(start, end) {
    for (let i = start; i < end; i++) {
        let row = board.rows[Math.floor(i / 10)];
        let cell = row.cells[i % 10];
        cell.style.backgroundColor = "yellow";
    }
}

startButton.addEventListener("click", () => {
    resetGame();
    displayTime();
    startButton.disabled = true;
    startButton.style.backgroundColor = "grey";
});

addInput.addEventListener("click", () => {
    let result = setGuess(parseInt(input.value));

    input.value = "";
    input.focus();

    colorCells(result.start, result.end);
    message.innerText = result.message;

    numOfReminderGuesses.innerText = `Number of remaining guesses: ${getCurrentAllowGuesses()}`;

    previousGausses.innerText = `Previous guesses: ${getPreviousGuesses().join(", ")}`;
});
