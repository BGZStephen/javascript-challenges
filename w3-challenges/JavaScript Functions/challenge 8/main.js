// JavaScriot Functions - 8

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.  
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;
let outputString

input.addEventListener(`keyup`, () => {
  string = input.value;
})

// start index value from 2 as prime numbers are only divisble by themselves and 1
// cycle through all numbers between 2 and the immediately preceding number of the value entered
// use modulo function to check remainders, if 0, that means they are divisble equally and are not a prime number.
// if the for loop completes without returning, then the number is a prime number

button.addEventListener(`click`, () => {
  string = parseInt(string);
  for(let i=2; i < string; i++) {
    let divider = i;
    let check = string % i;
    if(check == 0) {
      output.textContent = `Not a prime Number`
      return;
    }
  } output.textContent = `Is a prime number`
})
