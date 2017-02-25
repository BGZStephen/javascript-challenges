// JavaScriot Functions - 5

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;

input.addEventListener(`keyup`, () => {
  string = input.value;
})

// \b gets a character that is a word boundary where it is either preceeded by, or preceeds a whitespace
// \w ensures the following character is a letter, meaning the boundary can only be a starting work
// /g gets all global instancess

button.addEventListener(`click`, () => {
  string = string.replace(/\b\w/g, function(i) {return i.toUpperCase()})
  output.textContent = string
})
