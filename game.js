const winsSpan = document.getElementById('wins-span');
const lossesSpan = document.getElementById('losses-span');
const remainingGuessesSpan = document.getElementById('remaining-guesses-span');
const guessedLettersSpan = document.getElementById('guessed-letters-span');
const guessesBox = document.querySelector('.guesses-box');
const instructionBox = document.querySelector('.instructions-box');
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let letter;
let wins = 0;
let losses = 0;
let remainingGuesses = 6;

function pickRandomLetter() {
  randomNumber = Math.floor(Math.random() * alphabet.length);
  letter = alphabet[randomNumber];
  console.log(letter);
}

document.addEventListener('keypress', (event) => {
  console.log(event.key);
  remainingGuesses--;
  remainingGuessesSpan.innerHTML = remainingGuesses;
  checkLetter(event.key);
})

function checkLetter(usersEvent) {
  if (remainingGuesses >= 0 && usersEvent === letter) {
    console.log('you win!');
    wins++;
    winsSpan.innerHTML = wins;
    reset();
  } else if (remainingGuesses >= 1 && usersEvent != letter) {
    guessedLettersSpan.innerHTML += `${usersEvent} `
  } else if (remainingGuesses == 0 && usersEvent != letter) {
    losses++;
    lossesSpan.innerHTML = losses;
    reset()
  }
}

function reset() {
  remainingGuesses = 6;
  remainingGuessesSpan.innerHTML = remainingGuesses;
  guessedLettersSpan.innerHTML = '';
  pickRandomLetter();
}