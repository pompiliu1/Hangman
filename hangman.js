const words = ["word", "search", "look", "speak", "hear"];
const nrOfLetter = 26;
const asciiCodeForA = 65;
let lives = document.getElementById("lives");
let guessedWord;
let randomWord;

function initGame() {
  randomWord = words[Math.floor(Math.random() * words.length)]
    .toUpperCase()
    .split("");
  guessedWord = "_".repeat(randomWord.length).split("").join(" ");
}
initGame();
function displayWord() {
  document.getElementById("guessWord").textContent = guessedWord;
}
displayWord();

function createAlphabetButtons() {
  let buttonContainer = document.getElementById("buttonContainer");
  for (let i = 0; i < nrOfLetter; i++) {
    let letter = String.fromCharCode(asciiCodeForA + i);
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
