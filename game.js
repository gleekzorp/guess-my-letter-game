const winsSpan = document.getElementById('wins-span');
const lossesSpan = document.getElementById('losses-span');
const remainingGuessesSpan = document.getElementById('remaining-guesses-span');
const guessedLettersSpan = document.getElementById('guessed-letters-span');
const guessesBox = document.querySelector('.guesses-box');
const instructionBox = document.querySelector('.instructions-box');
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.addEventListener('keypress', (event) => {
  console.log(event.key)
})


// Create connections to all needed front end elements
// Create an array of the full alphabet
// Create a function that randomly picks a letter from that alphabet

// Create an event listener to get user keypresses
// If users key press is a letter:
// 