const words = ["word", "search", "look", "speak", "hear"];
let randomWord = words[Math.floor(Math.random() * words.length)]
  .toUpperCase()
  .split("");
let guessedWord = "_".repeat(randomWord.length).split("").join(" ");

function displayWord() {
  document.getElementById("guessWord").textContent = guessedWord;
}
displayWord();

function createAlphabetButtons() {
  let buttonContainer = document.getElementById("buttonContainer");
  for (let i = 0; i < 26; i++) {
    let letter = String.fromCharCode(65 + i);
    let button = document.createElement("button");
    button.textContent = letter;
    button.addEventListener("click", function () {
      if (randomWord.includes(letter)) {
        for (let i = 0; i < randomWord.length; ++i) {
          if (randomWord[i] === letter) {
            let indexLetter = i + i;
            guessedWord =
              guessedWord.substring(0, indexLetter) +
              letter +
              guessedWord.substring(indexLetter + 1);
            displayWord();
            if (!guessedWord.includes("_")) {
              document.getElementById("lives").textContent = "you won!";
            }
          }
        }
      } else {
        didntGuess();
      }
    });
    buttonContainer.appendChild(button);
  }
}

function didntGuess() {
  let lives = document.getElementById("lives");
  lives.textContent = parseInt(lives.textContent) - 1;
  if (parseInt(lives.textContent) === 0) {
    document.getElementById("lives").textContent =
      "you lost the word was: " + randomWord.join("");
  }
}

function resetGame() {
  window.location.reload();
}
createAlphabetButtons();
