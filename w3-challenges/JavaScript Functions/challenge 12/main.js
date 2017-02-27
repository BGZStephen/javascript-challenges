// JavaScriot Functions - 12

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;

input.addEventListener(`keyup`, () => {
  string = parseInt(input.value);
})

button.addEventListener(`click`, () => {
  let divisors = [];
  let total = 0;
  for(let i = 0; i < string; i++) { // for loop to check if a number equally divides by the entered string, if so, push to the divisors array
    if(string % i == 0) {
      divisors.push(i)
    }
  }
  for(let j = 0; j < divisors.length; j++) { // iterate through divisors array and add all the numbers together
    total += divisors[j]
  }
  if(total == string) { // if total of the array equals the string, it's a perfect number
    output.textContent = `You've entered a perfect number`
  } else {
    output.textContent = `The number you've entered is not perfect`
  }
})
