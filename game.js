//Save the buttons as constants
const inputField = document.querySelector("#userGuess");

const guessButton = document.querySelector("#guessButton");

const result = guessButton.querySelectorAll("#result");
//Add an eventListener that takes input from the input field
//Print something to the console
guessButton.addEventListener("click", (e) => {
    let guess = parseInt(inputField.value);
    console.log(guess);
    if (guess === randomNumber) {
        console.log("congratz");
        document.querySelector("#result").innerText = "congratz";

    } else {
        console.log("you failed");
        document.querySelector("#result").innerText = "failed";
        higherOrLower(guess, randomNumber);
    }
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