//Save the buttons as constants
const inputField = document.querySelector("#userGuess");

const guessButton = document.querySelector("#guessButton");

const reloadButton = document.querySelector("#reloadButton")

const currentStreakDisplay = document.querySelector("#streak");

const highScoreStreakDisplay = document.querySelector("#highScoreStreak");
//Add an eventListener that takes input from the input field
//Print something to the console

let currentStreak = 0
let highScoreStreak = 0

guessButton.addEventListener("click", (e) => {
    let guess = parseInt(inputField.value);

    console.log(guess);
    if (guess === randomNumber) {
        console.log("congratz");
        document.querySelector("#result").innerText = "Congratz you guessed the right number";
        document.querySelector("#higherOrLower").innerText = "";

        currentStreak++
        if (currentStreak > highScoreStreak) {
            highScoreStreak = currentStreak
        }

        highScoreStreakDisplay.innerText = `${highScoreStreak}`;
        currentStreakDisplay.innerText = `${currentStreak}`;
        randomNumber = generateNumber();
        console.log("New random number:", randomNumber);
    } else {
        console.log("you failed");
        document.querySelector("#result").innerText = "You guessed wrong";
        higherOrLower(guess, randomNumber);
        currentStreak = 0;
        currentStreakDisplay.innerText = `${currentStreak}`;

    }
})

reloadButton.addEventListener("click", () => {
    location.reload()
})

//Make a random number between 1-5
    let randomNumber = generateNumber();
    console.log(randomNumber)

//Returns a random number between 1-5
    function generateNumber() {
        return Math.floor(Math.random() * 5) + 1;
    }


function higherOrLower(guess, randomNumber) {
    if (guess > randomNumber) {
        document.querySelector("#higherOrLower").innerText = "Guess lower";
    } else if (guess < randomNumber) {
        document.querySelector("#higherOrLower").innerText = "Guess higher";
    }
}

