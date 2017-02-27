// JavaScriot Functions - 13

// 13. Write a JavaScript function to compute the factors of a positive integer.

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;

input.addEventListener(`keyup`, () => {
  string = parseInt(input.value);
})

button.addEventListener(`click`, () => {
  let outputString = `<p>The following are factors of your entered number: </p>`
  let factors = [];
  for(let i = 0; i < string; i++) { // for loop to check if a number equally divides by the entered string, if so, push to the divisors array
    if(string % i == 0) {
      factors.push(i)
    }
  }
  for(let j = 0; j < factors.length; j++) {
    outputString += `<p>+/- ` + factors[j] + `</p>`
  }
  output.innerHTML = outputString;
})
