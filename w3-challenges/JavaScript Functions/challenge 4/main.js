// JavaScriot Functions - 4

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;

input.addEventListener(`keyup`, () => {
  string = input.value;
})

// convert string to lower case
// split the string in to array
// execute sort method on the array
// convert it back to a string
// remove characters inserted by splitting to an array

button.addEventListener(`click`, () => {
  string = string.toLowerCase();
  let stringArray = string.split(``)
  stringArray.sort();
  stringArray = stringArray.toString();
  stringArray = stringArray.replace(/[|]|,/gi, ``);
  output.textContent = stringArray
})
