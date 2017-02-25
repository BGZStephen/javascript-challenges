// Challenge 8

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

let min = 1;
let max = 10;

let numberToCheck = Math.floor(Math.random() * max + min)

let userGuess = prompt(`I'm thinking of a number between 1 and 10, can you guess it?`)

if(userGuess == numberToCheck) {
  alert(`Congratulations, you guessed correctly!`)
} else {
  alert(`Incorrect guess`)
}
