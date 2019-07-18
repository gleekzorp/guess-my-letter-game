
# pseudo

- Create connections to all needed front end elements
- Create an array of the full alphabet
- Create a function that randomly picks a letter from that alphabet

- onPageLoad function:
  - wins = 0
  - losses = 0
  - reset function

- Create an event listener to get user keypresses
  - If users key press is a letter:
    - remaining guesses - 1
    - do check function
  - else:
    - do pleaseSelectLetter function

- Check function
  - if remaining guesses >= 0 && event.key equals letter:
    - wins + 1
    - youWin function
  - else if remaining guesses > 1 && event.key != to letter:
    - push guess to guessed letters
  - else if remaining guesses >= 0 && event.key != to letter:
    - losses + 1
    - reset function

- reset function:
  - remaining guesses back to 6
  - remaining guesses inner html set
  - guessed letters set to none
  - pickRandomLetter function

- youWin function:
  - alert('You guessed correct it was letter.  Lets play again.')
  - reset()

- youLose function:
  - alert('You ran out of guesses you lost.  Lets play again')
  - reset()


## possible extra steps
- Flash colors function:
  - change color of border
  - set time out to change color back

- Play sound function: